import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms — Kitchnly',
  description: 'Kitchnly terms of service.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
      >
        ← Back to Kitchnly
      </Link>
      <h1 className="mt-6 font-display text-4xl md:text-5xl text-text-primary">
        Terms of Service
      </h1>
      <p className="mt-4 text-text-secondary">
        Last updated: May 2026 — placeholder.
      </p>
      <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
        <p>
          Kitchnly is a marketplace connecting home cooks with neighbours in
          their city. Full terms will be published before our public launch.
        </p>
        <p>
          If you have questions before then, email{' '}
          <a
            href="mailto:hello@kitchnly.app"
            className="text-brand-orange hover:underline"
          >
            hello@kitchnly.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
