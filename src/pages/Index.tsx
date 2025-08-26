import HeroBanner from "@/components/HeroBanner";
import SpaDevicesCarousel from "@/components/SpaDevicesCarousel";
import ServicesSection from "@/components/ServicesSection";
import SpaLocationsCarousel from "@/components/SpaLocationsCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";

import Footer from "@/components/Footer";
import ContactAndBullfrogSection from "@/components/ContactAndBullfrogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroBanner />
      <ContactAndBullfrogSection />
      <SpaLocationsCarousel />
      <TestimonialsSection />
      
      <Footer />
    </div>
  );
};

export default Index;
