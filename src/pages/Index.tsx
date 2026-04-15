import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import MenuCategories from "@/components/MenuCategories";
import BestSellers from "@/components/BestSellers";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <MenuCategories />
      <BestSellers />
      <AboutSection />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default Index;
