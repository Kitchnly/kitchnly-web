import { WaitlistForm } from './WaitlistForm';

export function WaitlistSection() {
  return (
    <section id="join" className="relative scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.18em] text-brand-orange uppercase">
            Join the waitlist
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-text-primary">
            Save your spot as a founding cook.
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Tell us a bit about you and where you cook. We&apos;ll be in touch
            the moment we open in your city.
          </p>
        </div>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
