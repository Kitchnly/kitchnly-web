'use server';

import { headers } from 'next/headers';
import { getSupabaseAdmin } from '@/lib/supabaseAdmin';
import { waitlistSchema } from '@/lib/waitlistSchema';

export type WaitlistState =
  | { status: 'idle' }
  | { status: 'success'; message: string }
  | {
      status: 'error';
      message: string;
      fieldErrors?: Record<string, string[] | undefined>;
    };

export async function submitWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const raw = {
    name: (formData.get('name') ?? '').toString(),
    email: (formData.get('email') ?? '').toString(),
    phone: (formData.get('phone') ?? '').toString(),
    city: (formData.get('city') ?? '').toString(),
    province: (formData.get('province') ?? '').toString(),
    hear_about_us: (formData.get('hear_about_us') ?? '').toString(),
    monthly_wtp: (formData.get('monthly_wtp') ?? '').toString(),
    notes: (formData.get('notes') ?? '').toString(),
    company: (formData.get('company') ?? '').toString(),
  };

  // Honeypot: silently return success without inserting.
  if (raw.company.trim().length > 0) {
    return { status: 'success', message: "You're on the list!" };
  }

  const parsed = waitlistSchema.safeParse(raw);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      status: 'error',
      message: 'Please fix the highlighted fields.',
      fieldErrors: flat.fieldErrors,
    };
  }

  const data = parsed.data;
  const ua = (await headers()).get('user-agent') ?? null;

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from('seller_waitlist').insert({
      name: data.name,
      email: data.email,
      phone: data.phone ? data.phone : null,
      city: data.city,
      province: data.province,
      hear_about_us: data.hear_about_us,
      monthly_wtp: data.monthly_wtp,
      notes: data.notes ? data.notes : null,
      source: 'landing',
      user_agent: ua,
    });

    if (error) {
      // Postgres unique violation → treat as success.
      if (error.code === '23505') {
        return {
          status: 'success',
          message: "You're already on the list — thanks!",
        };
      }
      console.error('[waitlist] insert failed', error);
      return {
        status: 'error',
        message:
          'Something went wrong on our end. Please try again in a moment.',
      };
    }

    return { status: 'success', message: "You're on the list!" };
  } catch (err) {
    console.error('[waitlist] unexpected error', err);
    return {
      status: 'error',
      message:
        'Something went wrong on our end. Please try again in a moment.',
    };
  }
}
