import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

import MenuCategories from "@/components/MenuCategories";
import BestSellers from "@/components/BestSellers";

import TestimonialsSection from "@/components/TestimonialsSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <MenuCategories />
      <BestSellers />
      
      <TestimonialsSection />
      <ReservationSection />
      <Footer />
    </div>
  );
};

export default Index;
