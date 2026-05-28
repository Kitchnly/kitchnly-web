import { Nav } from '@/components/landing/Nav';
import { Hero } from '@/components/landing/Hero';
import { WhyKitchnly } from '@/components/landing/WhyKitchnly';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { AppScreenshots } from '@/components/landing/AppScreenshots';
import { FoundingCook } from '@/components/landing/FoundingCook';
import { WaitlistSection } from '@/components/landing/WaitlistSection';
import { Faq } from '@/components/landing/Faq';
import { Footer } from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhyKitchnly />
      <HowItWorks />
      <AppScreenshots />
      <FoundingCook />
      <WaitlistSection />
      <Faq />
      <Footer />
    </main>
  );
}
