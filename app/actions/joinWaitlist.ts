"use server";

import { z } from "zod";
import {
  PROVINCES,
  HEAR_ABOUT_US_OPTIONS,
  MONTHLY_WTP_OPTIONS,
} from "@/lib/constants";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  city: z.string().min(2, "City must be at least 2 characters"),
  province: z.enum(PROVINCES, { errorMap: () => ({ message: "Please select a province" }) }),
  hearAboutUs: z.enum(HEAR_ABOUT_US_OPTIONS, { errorMap: () => ({ message: "Please select an option" }) }),
  monthlyWtp: z.enum(MONTHLY_WTP_OPTIONS, { errorMap: () => ({ message: "Please select an option" }) }),
  notes: z.string().max(1000, "Notes must be under 1000 characters").optional(),
  honeypot: z.string().max(0, "Bot detected"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;

export async function joinWaitlist(
  formData: WaitlistFormData,
  userAgent: string
): Promise<{ ok: true; message: string } | { ok: false; error: string }> {
  // Validate with zod
  const result = waitlistSchema.safeParse(formData);
  
  if (!result.success) {
    const firstError = result.error.errors[0];
    return { ok: false, error: firstError?.message || "Invalid form data" };
  }

  const data = result.data;

  // Silent drop for honeypot (bot detection)
  if (data.honeypot && data.honeypot.length > 0) {
    return { ok: true, message: "Thanks for joining! We'll be in touch soon." };
  }

  // Check for Supabase environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Log for debugging but return success to user
    console.log("[v0] Waitlist submission (Supabase not configured):", {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      city: data.city,
      province: data.province,
      hearAboutUs: data.hearAboutUs,
      monthlyWtp: data.monthlyWtp,
      notes: data.notes || null,
      source: "landing",
      userAgent,
    });
    
    return {
      ok: true,
      message: "Thanks for joining! We'll be in touch soon with updates and your exclusive early access invite.",
    };
  }

  // Import Supabase client dynamically when env vars are available
  const { createClient } = await import("@supabase/supabase-js");
  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { error } = await supabase.from("seller_waitlist").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      city: data.city,
      province: data.province,
      hear_about_us: data.hearAboutUs,
      monthly_wtp: data.monthlyWtp,
      notes: data.notes || null,
      source: "landing",
      user_agent: userAgent,
    });

    if (error) {
      // Check for unique constraint violation (already on list)
      if (error.code === "23505") {
        return {
          ok: true,
          message: "You're already on the list — thanks!",
        };
      }
      console.error("[v0] Supabase insert error:", error);
      return { ok: false, error: "Something went wrong. Please try again." };
    }

    return {
      ok: true,
      message: "Thanks for joining! We'll be in touch soon with updates and your exclusive early access invite.",
    };
  } catch (err) {
    console.error("[v0] Unexpected error:", err);
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
