import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="font-heading text-xl text-foreground">Kitchnly</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="#waitlist"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Join Waitlist
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kitchnly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
