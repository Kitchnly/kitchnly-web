import type { Metadata } from "next";
import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Kitchnly - Homemade. Heartmade.",
  description:
    "Turn your kitchen into a business. Kitchnly is a marketplace that connects home cooks with hungry neighbours. List your dishes, set your own prices, and start earning.",
  keywords: [
    "homemade food",
    "home cooking",
    "sell food from home",
    "cottage food",
    "local food marketplace",
    "home cook business",
  ],
  openGraph: {
    title: "Kitchnly - Homemade. Heartmade.",
    description:
      "Turn your kitchen into a business. Connect with hungry neighbours and start earning from the food you love to make.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#E8671A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-background", inter.variable, fraunces.variable)}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
