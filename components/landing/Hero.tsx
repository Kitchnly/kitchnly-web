import Image from 'next/image';
import Link from 'next/link';
import {
  ChiliDoodle,
  HerbDoodle,
  RollingPinDoodle,
  SparkleDoodle,
  SpoonDoodle,
  SteamDoodle,
  TomatoDoodle,
} from './Doodles';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-12 pb-20 md:pt-20 md:pb-32">
        <ChiliDoodle className="hidden md:block absolute left-6 top-10 w-14 text-brand-orange/70 -rotate-12" />
        <HerbDoodle className="hidden md:block absolute right-10 top-6 w-14 text-accent-brown/60 rotate-12" />
        <RollingPinDoodle className="hidden md:block absolute left-12 bottom-24 w-24 text-accent-brown/55 -rotate-6" />
        <TomatoDoodle className="hidden md:block absolute right-8 bottom-32 w-14 text-brand-orange/70 rotate-6" />
        <SteamDoodle className="hidden md:block absolute right-1/4 top-16 w-12 text-accent-brown/50" />
        <SpoonDoodle className="hidden lg:block absolute left-1/4 bottom-10 w-8 text-accent-brown/55 rotate-[18deg]" />
        <SparkleDoodle className="hidden md:block absolute left-1/3 top-8 w-5 text-accent-orange" />
        <SparkleDoodle className="hidden md:block absolute right-1/3 bottom-12 w-4 text-accent-orange" />

        <div className="relative mx-auto max-w-2xl rounded-3xl border border-border-warm bg-surface-cream/80 shadow-[0_30px_60px_-30px_rgba(122,64,0,0.25)] backdrop-blur-sm px-6 py-12 sm:px-12 sm:py-16 text-center">
          <Image
            src="/logo.png"
            alt=""
            width={64}
            height={64}
            className="mx-auto h-14 w-14 object-contain"
            priority
          />
          <p className="mt-3 font-display text-3xl text-accent-brown leading-none">
            Kitchnly
          </p>
          <p className="mt-1 font-display italic text-text-secondary text-base">
            Homemade. Heartmade.
          </p>

          <p className="mt-10 text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            For home cooks
          </p>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-text-primary">
            Turn your kitchen into a business.
            <span className="block text-brand-orange italic">On your terms.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Kitchnly is a marketplace where home cooks sell homemade food to
            neighbours in their city. Set your own menu, prices, and hours —
            cook when it suits you.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-warm-2 border border-border-warm px-3 py-1.5 text-sm text-accent-brown">
              <span aria-hidden className="text-brand-orange">●</span>
              Free to join through 2026
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-warm-2 border border-border-warm px-3 py-1.5 text-sm text-accent-brown">
              <span aria-hidden className="text-brand-orange">★</span>
              Founding cook perks
            </span>
          </div>

          <div className="mt-9">
            <Link
              href="#join"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-orange hover:bg-brand-orange-hover transition-colors px-7 py-4 text-base font-medium text-white shadow-[0_10px_25px_-12px_rgba(232,103,26,0.55)]"
            >
              Join the waitlist
            </Link>
            <p className="mt-3 text-xs text-text-muted">
              Takes under a minute. No app to install yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
