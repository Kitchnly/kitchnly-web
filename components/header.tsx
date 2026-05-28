"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border-warm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Kitchnly"
            width={40}
            height={40}
            className="size-10"
          />
          <span className="font-heading text-xl text-foreground">Kitchnly</span>
        </Link>
        <Link
          href="#join"
          className="rounded-2xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Join the waitlist
        </Link>
      </nav>
    </header>
  );
}
