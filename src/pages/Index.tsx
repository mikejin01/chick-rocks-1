import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import MenuCategories from "@/components/MenuCategories";
import BestSellers from "@/components/BestSellers";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <MenuCategories />
      <BestSellers />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
