type Step = {
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    title: 'Set up your kitchen profile',
    body: 'Tell us about your kitchen, your dishes, and the neighbourhood you serve. Add a few photos. Takes about 20 minutes.',
  },
  {
    title: 'Get discovered',
    body: 'Neighbours in your city find your kitchen on Kitchnly — browse your menu, leave reviews, and place orders.',
  },
  {
    title: 'Cook and earn',
    body: 'Cook on your own schedule. Hand-off or deliver — your call. We handle payments and reviews so you can focus on the food.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-surface-cream/60 border-y border-border-warm/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            Three steps from your kitchen to your first order.
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-border-warm bg-bg-cream p-7 shadow-[0_20px_40px_-30px_rgba(122,64,0,0.15)]"
            >
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-brand-orange/85"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display text-2xl text-text-primary leading-snug">
                {step.title}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
