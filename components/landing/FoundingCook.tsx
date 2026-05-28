import Link from 'next/link';

const PERKS = [
  {
    title: 'Free through all of 2026',
    body: 'No subscription, no listing fees, no surprise cuts. Every dollar you earn this year is yours.',
  },
  {
    title: 'Locked-in early pricing for 2027',
    body: 'When paid plans arrive in January 2027, founding cooks get the lowest tier we ever offer — for life.',
  },
  {
    title: 'Direct line to the founders',
    body: 'You shape what we build. We text. We meet. We listen. Your feedback decides what ships first.',
  },
];

export function FoundingCook() {
  return (
    <section className="relative bg-surface-warm-2">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Founding cook
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            The cooks who join now get to write the rules with us.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Kitchnly is being built alongside our first 100 cooks. If that
            sounds like you, here&apos;s what you get for showing up early.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {PERKS.map((perk) => (
            <li
              key={perk.title}
              className="rounded-3xl border border-border-warm bg-bg-cream p-7 shadow-[0_20px_40px_-30px_rgba(122,64,0,0.15)]"
            >
              <h3 className="font-display text-xl text-text-primary leading-snug">
                {perk.title}
              </h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {perk.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            href="#join"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover transition-colors px-7 py-4 text-base font-medium text-white shadow-[0_10px_25px_-12px_rgba(232,103,26,0.55)]"
          >
            Become a founding cook
          </Link>
        </div>
      </div>
    </section>
  );
}
