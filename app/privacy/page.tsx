import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy — Kitchnly',
  description: 'How Kitchnly handles your information.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 sm:px-8 py-16 md:py-24">
      <Link
        href="/"
        className="text-sm text-text-secondary hover:text-brand-orange transition-colors"
      >
        ← Back to Kitchnly
      </Link>
      <h1 className="mt-6 font-display text-4xl md:text-5xl text-text-primary">
        Privacy
      </h1>
      <p className="mt-4 text-text-secondary">
        Last updated: May 2026 — placeholder.
      </p>
      <div className="mt-8 space-y-4 text-text-secondary leading-relaxed">
        <p>
          When you join the Kitchnly waitlist, we collect your name, email,
          phone (optional), city, province, how you heard about us, and your
          pricing feedback. We use this only to contact you about Kitchnly and
          to design fair pricing for cooks.
        </p>
        <p>
          We don&apos;t sell your information or share it with third parties.
          You can ask us to delete your record at any time by emailing{' '}
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
