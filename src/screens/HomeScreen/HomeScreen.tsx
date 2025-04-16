import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { PropertyTabs } from "@/components/PropertyTabs";
import { Testimonials } from "@/components/Testimonials";

export const HomeScreen = () => {
  return (
    <main>
      <HeroSection />
      <PropertyTabs />
      <Testimonials />
      <Footer />
    </main>
  );
};
