import Image from 'next/image';
import Link from 'next/link';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg-cream/80 border-b border-border-warm/60">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl flex items-center justify-between px-5 sm:px-8 py-3"
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Kitchnly home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="font-display text-2xl tracking-tight text-accent-brown leading-none">
            Kitchnly
          </span>
        </Link>
        <Link
          href="#join"
          className="inline-flex items-center justify-center rounded-full bg-brand-orange hover:bg-brand-orange-hover transition-colors px-5 py-2.5 text-sm font-medium text-white shadow-sm"
        >
          Join the waitlist
        </Link>
      </nav>
    </header>
  );
}
