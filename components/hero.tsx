import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full mb-6">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">
            Coming soon to your neighborhood
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6 text-balance">
          Homemade Food,
          <br />
          <span className="text-primary">Made Local</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Discover authentic, lovingly-prepared meals from talented home cooks in
          your neighborhood. Support local makers and enjoy food that tastes like
          home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#waitlist"
            className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Join the Waitlist
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto bg-card text-foreground px-8 py-3 rounded-xl text-lg font-medium hover:bg-card/80 transition-colors border border-border"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
