"use client";

import { useState, useTransition } from "react";
import {
  joinWaitlist,
  type WaitlistFormData,
} from "@/app/actions/joinWaitlist";
import {
  PROVINCES,
  HEAR_ABOUT_US_OPTIONS,
  MONTHLY_WTP_OPTIONS,
} from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function WaitlistForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{
    ok: boolean;
    message?: string;
    error?: string;
  } | null>(null);
  const [province, setProvince] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [monthlyWtp, setMonthlyWtp] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data: WaitlistFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || undefined,
      city: formData.get("city") as string,
      province: province as (typeof PROVINCES)[number],
      hearAboutUs: hearAboutUs as (typeof HEAR_ABOUT_US_OPTIONS)[number],
      monthlyWtp: monthlyWtp as (typeof MONTHLY_WTP_OPTIONS)[number],
      notes: (formData.get("notes") as string) || undefined,
      honeypot: formData.get("company") as string,
    };

    startTransition(async () => {
      const response = await joinWaitlist(data, navigator.userAgent);
      setResult(response);
    });
  };

  if (result?.ok) {
    return (
      <section id="join" className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="rounded-3xl bg-surface p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle className="size-8 text-success" />
            </div>
            <h2 className="font-heading text-2xl text-foreground sm:text-3xl">
              You&apos;re on the list!
            </h2>
            <p className="mt-4 text-text-secondary">
              {result.message || "We'll be in touch as Kitchnly opens up in your area. In the meantime, follow @kitchnly on Instagram."}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-xl">
        <div className="rounded-3xl bg-surface p-6 sm:p-10">
          <div className="mb-8 text-center">
            <Image
              src="/logo.png"
              alt="Kitchnly"
              width={48}
              height={48}
              className="mx-auto mb-4 size-12"
            />
            <h2 className="font-heading text-2xl text-foreground sm:text-3xl">
              Join the seller waitlist
            </h2>
            <p className="mt-2 text-text-secondary text-pretty">
              Tell us a little about you. We&apos;ll reach out as we open the app up in your city.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot field - hidden from users */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Full name */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Full name <span className="text-error">*</span>
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                placeholder="Your full name"
                className="h-12 rounded-xl bg-background focus-visible:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email <span className="text-error">*</span>
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                placeholder="you@example.com"
                className="h-12 rounded-xl bg-background focus-visible:ring-primary"
              />
            </div>

            {/* Phone (optional) */}
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                Phone <span className="text-text-muted">(optional)</span>
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(555) 123-4567"
                className="h-12 rounded-xl bg-background focus-visible:ring-primary"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-medium text-foreground">
                City <span className="text-error">*</span>
              </label>
              <Input
                type="text"
                id="city"
                name="city"
                required
                aria-required="true"
                placeholder="Your city"
                className="h-12 rounded-xl bg-background focus-visible:ring-primary"
              />
            </div>

            {/* Province */}
            <div>
              <label htmlFor="province" className="mb-2 block text-sm font-medium text-foreground">
                Province <span className="text-error">*</span>
              </label>
              <Select value={province} onValueChange={setProvince} required>
                <SelectTrigger className="h-12 w-full rounded-xl bg-background focus-visible:ring-primary">
                  <SelectValue placeholder="Select your province" />
                </SelectTrigger>
                <SelectContent>
                  {PROVINCES.map((prov) => (
                    <SelectItem key={prov} value={prov}>
                      {prov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAboutUs" className="mb-2 block text-sm font-medium text-foreground">
                How did you hear about us? <span className="text-error">*</span>
              </label>
              <Select value={hearAboutUs} onValueChange={setHearAboutUs} required>
                <SelectTrigger className="h-12 w-full rounded-xl bg-background focus-visible:ring-primary">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {HEAR_ABOUT_US_OPTIONS.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Monthly willingness to pay */}
            <div>
              <label className="mb-3 block text-sm font-medium text-foreground">
                Once Kitchnly launches paid plans in January 2027, what monthly subscription would feel fair for the value you&apos;d get as a seller? <span className="text-error">*</span>
              </label>
              <div className="flex flex-col gap-3">
                {MONTHLY_WTP_OPTIONS.map((option) => (
                  <label key={option} className="flex cursor-pointer items-center gap-3">
                    <input
                      type="radio"
                      name="monthlyWtp"
                      value={option}
                      checked={monthlyWtp === option}
                      onChange={(e) => setMonthlyWtp(e.target.value)}
                      required
                      aria-required="true"
                      className="size-4 border-border text-primary focus:ring-primary focus:ring-offset-0"
                    />
                    <span className="text-sm text-foreground">{option}</span>
                  </label>
                ))}
              </div>
              <p className="mt-2 text-xs text-text-muted">
                There are no wrong answers — we want to set fair pricing for cooks.
              </p>
            </div>

            {/* Notes (optional) */}
            <div>
              <label htmlFor="notes" className="mb-2 block text-sm font-medium text-foreground">
                Anything you&apos;d like us to know? <span className="text-text-muted">(optional)</span>
              </label>
              <Textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Tell us about yourself, your cooking style, or any questions you have..."
                className="rounded-xl bg-background focus-visible:ring-primary"
              />
            </div>

            {/* Error message */}
            {result && !result.ok && (
              <p className="text-sm text-error text-center">
                {result.error}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isPending || !province || !hearAboutUs || !monthlyWtp}
              className={cn(
                "mt-2 h-12 w-full rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-lg transition-all sm:w-auto sm:px-8",
                isPending || !province || !hearAboutUs || !monthlyWtp
                  ? "cursor-not-allowed opacity-70"
                  : "hover:bg-primary-hover hover:shadow-xl"
              )}
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="size-5 animate-spin" />
                  Joining...
                </span>
              ) : (
                "Join the waitlist"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
