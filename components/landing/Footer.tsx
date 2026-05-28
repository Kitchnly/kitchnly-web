import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-cream/60 border-t border-border-warm">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <p className="font-display text-xl text-accent-brown">Kitchnly</p>
              <p className="text-sm text-text-secondary italic">
                Homemade. Heartmade.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://instagram.com/kitchnly.app"
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-brand-orange transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@kitchnly.app"
              className="text-text-secondary hover:text-brand-orange transition-colors"
            >
              hello@kitchnly.app
            </a>
            <Link
              href="/terms"
              className="text-text-secondary hover:text-brand-orange transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-text-secondary hover:text-brand-orange transition-colors"
            >
              Privacy
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-sm text-text-muted">
          © 2026 Kitchnly. Made with love.
        </p>
      </div>
    </footer>
  );
}
