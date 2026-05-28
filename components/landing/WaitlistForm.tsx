'use client';

import { useActionState, useEffect, useId, useRef } from 'react';
import Image from 'next/image';
import { submitWaitlist, type WaitlistState } from '@/app/actions/waitlist';
import {
  HEAR_ABOUT_OPTIONS,
  MONTHLY_WTP_OPTIONS,
  PROVINCES,
} from '@/lib/waitlistSchema';

const initialState: WaitlistState = { status: 'idle' };

function RequiredMark() {
  return (
    <span aria-hidden className="text-error ml-0.5">
      *
    </span>
  );
}

function FieldError({ id, errors }: { id: string; errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-error">
      {errors[0]}
    </p>
  );
}

export function WaitlistForm() {
  const [state, action, pending] = useActionState(submitWaitlist, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const ids = {
    name: useId(),
    email: useId(),
    phone: useId(),
    city: useId(),
    province: useId(),
    hear: useId(),
    wtp: useId(),
    notes: useId(),
  };

  useEffect(() => {
    if (state.status === 'success') {
      successRef.current?.focus();
    }
  }, [state.status]);

  const fieldErrors =
    state.status === 'error' ? state.fieldErrors ?? {} : {};

  if (state.status === 'success') {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="relative rounded-3xl border border-border-warm bg-surface-cream/80 p-10 sm:p-14 text-center shadow-[0_30px_60px_-30px_rgba(122,64,0,0.25)]"
      >
        <Image
          src="/logo.png"
          alt=""
          width={64}
          height={64}
          className="mx-auto h-14 w-14 object-contain"
        />
        <h3 className="mt-4 font-display text-3xl sm:text-4xl text-text-primary">
          {state.message}
        </h3>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          We&apos;ll email you the moment Kitchnly opens in your city. In the
          meantime, follow along on Instagram — we share early peeks and
          founding-cook updates there.
        </p>
        <a
          href="https://instagram.com/kitchnly.app"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center justify-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover transition-colors px-7 py-4 text-base font-medium text-white shadow-[0_10px_25px_-12px_rgba(232,103,26,0.55)]"
        >
          Follow @kitchnly.app
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={action}
      noValidate
      aria-describedby={state.status === 'error' ? 'form-error-summary' : undefined}
      className="rounded-3xl border border-border-warm bg-surface-cream/70 p-6 sm:p-10 shadow-[0_30px_60px_-30px_rgba(122,64,0,0.22)] space-y-6"
    >
      {state.status === 'error' && (
        <p
          id="form-error-summary"
          role="alert"
          className="rounded-2xl border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
        >
          {state.message}
        </p>
      )}

      {/* honeypot: invisible field; bots fill, humans don't */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="company">Company (leave empty)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.name} className="block text-sm font-medium text-text-primary">
            Full name<RequiredMark />
          </label>
          <input
            id={ids.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? `${ids.name}-err` : undefined}
            className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:outline-none"
          />
          <FieldError id={`${ids.name}-err`} errors={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor={ids.email} className="block text-sm font-medium text-text-primary">
            Email<RequiredMark />
          </label>
          <input
            id={ids.email}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? `${ids.email}-err` : undefined}
            className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:outline-none"
          />
          <FieldError id={`${ids.email}-err`} errors={fieldErrors.email} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.phone} className="block text-sm font-medium text-text-primary">
            Phone <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <input
            id={ids.phone}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? `${ids.phone}-err` : undefined}
            className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:outline-none"
          />
          <FieldError id={`${ids.phone}-err`} errors={fieldErrors.phone} />
        </div>
        <div>
          <label htmlFor={ids.city} className="block text-sm font-medium text-text-primary">
            City<RequiredMark />
          </label>
          <input
            id={ids.city}
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            aria-required
            aria-invalid={!!fieldErrors.city}
            aria-describedby={fieldErrors.city ? `${ids.city}-err` : undefined}
            className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:outline-none"
          />
          <FieldError id={`${ids.city}-err`} errors={fieldErrors.city} />
        </div>
      </div>

      <div>
        <label htmlFor={ids.province} className="block text-sm font-medium text-text-primary">
          Province<RequiredMark />
        </label>
        <select
          id={ids.province}
          name="province"
          required
          aria-required
          aria-invalid={!!fieldErrors.province}
          aria-describedby={fieldErrors.province ? `${ids.province}-err` : undefined}
          defaultValue=""
          className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary focus:border-brand-orange focus:outline-none"
        >
          <option value="" disabled>
            Select your province
          </option>
          {PROVINCES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <FieldError id={`${ids.province}-err`} errors={fieldErrors.province} />
      </div>

      <div>
        <label htmlFor={ids.hear} className="block text-sm font-medium text-text-primary">
          How did you hear about us?<RequiredMark />
        </label>
        <select
          id={ids.hear}
          name="hear_about_us"
          required
          aria-required
          aria-invalid={!!fieldErrors.hear_about_us}
          aria-describedby={fieldErrors.hear_about_us ? `${ids.hear}-err` : undefined}
          defaultValue=""
          className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary focus:border-brand-orange focus:outline-none"
        >
          <option value="" disabled>
            Pick one
          </option>
          {HEAR_ABOUT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <FieldError id={`${ids.hear}-err`} errors={fieldErrors.hear_about_us} />
      </div>

      <fieldset
        aria-invalid={!!fieldErrors.monthly_wtp}
        aria-describedby={fieldErrors.monthly_wtp ? `${ids.wtp}-err` : undefined}
      >
        <legend className="text-sm font-medium text-text-primary">
          Kitchnly is free through December 2026. When we launch paid plans in
          January 2027, what monthly subscription would feel fair for the value
          you&apos;d get as a seller?<RequiredMark />
        </legend>
        <p className="mt-1.5 text-sm text-text-secondary">
          There are no wrong answers — we want to set fair pricing for cooks.
        </p>
        <div className="mt-3 grid gap-2">
          {MONTHLY_WTP_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex items-start gap-3 rounded-2xl border border-border-warm bg-bg-cream px-4 py-3 cursor-pointer hover:border-brand-orange/60 transition-colors has-[:checked]:border-brand-orange has-[:checked]:bg-surface-warm-2"
            >
              <input
                type="radio"
                name="monthly_wtp"
                value={opt}
                required
                className="mt-1 h-4 w-4 accent-[var(--color-brand-orange)]"
              />
              <span className="text-text-primary">{opt}</span>
            </label>
          ))}
        </div>
        <FieldError id={`${ids.wtp}-err`} errors={fieldErrors.monthly_wtp} />
      </fieldset>

      <div>
        <label htmlFor={ids.notes} className="block text-sm font-medium text-text-primary">
          Anything you&apos;d like us to know?{' '}
          <span className="text-text-muted font-normal">(optional)</span>
        </label>
        <textarea
          id={ids.notes}
          name="notes"
          rows={4}
          maxLength={1000}
          aria-invalid={!!fieldErrors.notes}
          aria-describedby={fieldErrors.notes ? `${ids.notes}-err` : undefined}
          className="mt-1.5 w-full rounded-xl border border-border-warm bg-bg-cream px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-brand-orange focus:outline-none resize-y"
        />
        <FieldError id={`${ids.notes}-err`} errors={fieldErrors.notes} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-70 disabled:cursor-not-allowed transition-colors px-7 py-4 text-base font-medium text-white shadow-[0_10px_25px_-12px_rgba(232,103,26,0.55)]"
      >
        {pending ? 'Saving your spot…' : 'Join the waitlist'}
      </button>
      <p className="text-xs text-text-muted text-center">
        We&apos;ll only email you about Kitchnly. No spam, no list-sharing.
      </p>
    </form>
  );
}
