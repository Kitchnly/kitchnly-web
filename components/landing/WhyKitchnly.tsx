type Feature = {
  glyph: string;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    glyph: '🏘️',
    title: 'Reach local neighbours',
    body: 'Customers in your city find you on Kitchnly, browse your dishes, and order for pickup or delivery — your call.',
  },
  {
    glyph: '📋',
    title: 'Set your own menu and price',
    body: 'You decide what to cook, when to cook, and what to charge. No corporate menu, no minimum hours, no pressure.',
  },
  {
    glyph: '💰',
    title: 'Keep more of what you earn',
    body: 'Free for cooks through 2026 — every dollar goes to you. Founding cooks lock in fair pricing for 2027 and beyond.',
  },
];

export function WhyKitchnly() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Why Kitchnly
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            Built for the way you already cook.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            We&apos;re here for home cooks who want to share what they make with
            their neighbourhood — not run a restaurant.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f) => (
            <li
              key={f.title}
              className="group rounded-3xl border border-border-warm bg-surface-cream/70 p-7 shadow-[0_20px_40px_-30px_rgba(122,64,0,0.18)] hover:shadow-[0_25px_45px_-25px_rgba(232,103,26,0.3)] transition-shadow"
            >
              <span
                aria-hidden
                className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-surface-warm-2 border border-border-warm text-2xl"
              >
                {f.glyph}
              </span>
              <h3 className="mt-5 font-display text-2xl text-text-primary leading-snug">
                {f.title}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
