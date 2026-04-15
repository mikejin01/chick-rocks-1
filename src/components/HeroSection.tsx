import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-0">
      {/* Cloud shape background */}
      <div className="absolute bottom-0 left-0 right-0 h-[30%]">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            fill="hsl(45, 50%, 88%)"
            d="M0,160 C180,80 360,240 540,160 C720,80 900,240 1080,160 C1200,100 1320,200 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground text-center leading-[0.9] z-10 mb-4"
      >
        DELICIOUS<br />BURGERS
      </motion.h1>

      {/* Hero burger image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 animate-float"
      >
        <img
          src={heroBurger}
          alt="Delicious gourmet cheeseburger"
          width={800}
          height={800}
          className="w-[320px] sm:w-[400px] md:w-[480px] lg:w-[540px] drop-shadow-2xl"
        />
      </motion.div>

      {/* Reserve badge */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-[15%] top-[55%] z-20 bg-primary text-primary-foreground font-display text-xs px-4 py-3 rounded-full rotate-12 shadow-lg hidden md:block"
      >
        Reserve a Table →
      </motion.div>
    </section>
  );
};

export default HeroSection;
