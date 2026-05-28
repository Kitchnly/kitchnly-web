type Screen = {
  caption: string;
  body: string;
};

const SCREENS: Screen[] = [
  {
    caption: 'Your kitchen profile',
    body: 'Tell neighbours who you are and what you cook.',
  },
  {
    caption: 'Build your menu',
    body: 'Photograph your dishes, set your prices, your hours.',
  },
  {
    caption: 'Manage orders',
    body: 'See incoming orders, confirm pickups, message customers.',
  },
  {
    caption: 'Get paid',
    body: 'Track earnings and cash out to your bank in a tap.',
  },
];

function PhonePlaceholder({ index }: { index: number }) {
  return (
    <div className="relative mx-auto w-[200px] sm:w-[220px] aspect-[9/19] rounded-[2.25rem] border-[10px] border-accent-brown/85 bg-bg-cream shadow-[0_30px_50px_-25px_rgba(122,64,0,0.35)]">
      <span
        aria-hidden
        className="absolute left-1/2 top-1.5 -translate-x-1/2 h-1.5 w-16 rounded-full bg-accent-brown/70"
      />
      <div
        aria-hidden
        className="absolute inset-2 rounded-[1.6rem] border-2 border-dashed border-border-warm bg-surface-cream/70 flex flex-col items-center justify-center px-3 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-warm-2 border border-border-warm text-brand-orange">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            aria-hidden
          >
            <path
              d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2L9 4h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="13"
              r="3.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </span>
        <p className="mt-3 text-xs font-medium text-accent-brown">
          Screenshot {index + 1}
        </p>
        <p className="mt-1 text-[11px] leading-snug text-text-secondary">
          Coming soon
        </p>
      </div>
    </div>
  );
}

export function AppScreenshots() {
  return (
    <section className="relative bg-surface-cream/50 border-y border-border-warm/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Inside the app
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            Built for cooks, not spreadsheets.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            The Kitchnly app handles the boring parts — profile, menu, orders,
            payouts — so you can focus on the cooking.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENS.map((s, i) => (
            <li key={s.caption} className="flex flex-col items-center text-center">
              <PhonePlaceholder index={i} />
              <h3 className="mt-6 font-display text-xl text-text-primary leading-snug">
                {s.caption}
              </h3>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed max-w-[220px]">
                {s.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm text-text-muted">
          Real screenshots land before public launch. Founding cooks see them first.
        </p>
      </div>
    </section>
  );
}
