import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kitchnly — Homemade. Heartmade.',
  description:
    'Kitchnly is a marketplace where home cooks sell homemade food to local customers. Free to join through 2026.',
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport = {
  colorScheme: 'light' as const,
  themeColor: '#FFFDF8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-bg-cream text-text-primary">{children}</body>
    </html>
  );
}
