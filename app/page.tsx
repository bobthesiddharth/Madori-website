import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import FeaturesGrid from "@/components/FeaturesGrid";
import TwoPortals from "@/components/TwoPortals";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Strip with Metrics */}
      <TrustStrip />

      {/* 3. Comprehensive Features Grid (8 Cards) */}
      <FeaturesGrid />

      {/* 4. Two Portals (Owner vs Tenant Split Toggle) */}
      <TwoPortals />

      {/* 5. How It Works (3 Animated Steps) */}
      <HowItWorks />

      {/* 6. Transparent Pricing (3 Tiers in ₹) */}
      <Pricing />

      {/* 7. Real Testimonials Carousel */}
      <Testimonials />

      {/* 8. Frequently Asked Questions Accordion */}
      <FAQ />

      {/* 9. Contact & 1-on-1 Demo Request Form */}
      <ContactForm />
    </div>
  );
}
