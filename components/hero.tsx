import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-brown">
              For Home Cooks
            </p>
            <h1 className="font-heading text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Turn your kitchen into a business.{" "}
              <span className="text-primary">On your terms.</span>
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary sm:text-xl text-pretty">
              Kitchnly is a marketplace that connects home cooks with hungry
              neighbours. List your dishes, set your own prices, and start
              earning from the food you already love to make.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full bg-surface-warm px-4 py-2 text-sm font-medium text-foreground">
                Free to join through 2026
              </span>
              <span className="inline-flex items-center rounded-full bg-surface-warm px-4 py-2 text-sm font-medium text-foreground">
                Founding cook perks
              </span>
            </div>
            <div className="pt-2">
              <Link
                href="#join"
                className="inline-flex rounded-2xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary-hover hover:shadow-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Join the seller waitlist
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-surface shadow-xl lg:aspect-square">
            <Image
              src="/hero-image.png"
              alt="Homemade food on a wooden table"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
