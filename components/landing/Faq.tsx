'use client';

import { useState } from 'react';

type Item = { q: string; a: string };

const FAQ: Item[] = [
  {
    q: 'When is Kitchnly launching?',
    a: "We're building now and aiming to open Kitchnly to home cooks in select Canadian cities through 2026, starting with Ontario. Join the waitlist and we'll email you the moment we open in your area.",
  },
  {
    q: 'Do I need a food handling permit or business licence?',
    a: "Rules differ by province and municipality, and we'll send you a plain-English checklist for your city when we onboard you. We won't list you publicly until you're set. If you already have a permit or food-handling certificate, even better.",
  },
  {
    q: 'How much can I earn?',
    a: "It's your kitchen, your menu, your prices. Cooks who sell a few weekend orders typically make a few hundred dollars a month; cooks who treat it as a small business have made more. We don't take a cut of your sales through 2026.",
  },
  {
    q: 'What happens in January 2027?',
    a: "That's when we'll introduce paid plans for sellers. Founding cooks who join the waitlist now get locked-in early pricing and direct access to the founders to shape what those plans look like. Free for the rest of 2026 either way.",
  },
  {
    q: 'How will customers find me?',
    a: "Kitchnly is a mobile marketplace — neighbours in your city browse cooks and dishes on the app, place an order, and pick up from you (or you deliver — your call). We handle discovery, payments, and reviews so you can focus on the cooking.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Common questions
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            We&apos;ve got you.
          </h2>
        </div>

        <ul className="mt-10 space-y-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li
                key={item.q}
                className="rounded-2xl border border-border-warm bg-surface-cream/60 overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                >
                  <span className="font-display text-lg sm:text-xl text-text-primary leading-snug">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex-shrink-0 h-8 w-8 rounded-full bg-surface-warm-2 border border-border-warm flex items-center justify-center text-brand-orange transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-6 text-text-secondary leading-relaxed"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
