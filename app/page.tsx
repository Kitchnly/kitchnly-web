import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { FoundingCookPerks } from "@/components/founding-cook-perks";
import { WaitlistForm } from "@/components/waitlist-form";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <FoundingCookPerks />
      <WaitlistForm />
      <FAQ />
      <Footer />
    </main>
  );
}
