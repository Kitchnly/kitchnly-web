import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Kitchnly - Homemade Food, Made Local",
  description:
    "Discover and order authentic homemade food from talented home cooks in your neighborhood. Join the waitlist to be among the first to experience local, lovingly-prepared meals.",
  keywords: [
    "homemade food",
    "local food",
    "home cooks",
    "food marketplace",
    "neighborhood food",
    "cottage food",
  ],
  openGraph: {
    title: "Kitchnly - Homemade Food, Made Local",
    description:
      "Discover and order authentic homemade food from talented home cooks in your neighborhood.",
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
      className={cn("font-sans bg-background", dmSans.variable, dmSerifDisplay.variable)}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
