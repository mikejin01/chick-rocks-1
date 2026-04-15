import { motion } from "framer-motion";
import heroHandsBurger from "@/assets/hero-hands-burger.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-0 bg-background">
      {/* Subtle SVG background illustrations */}
      <svg className="absolute top-16 left-8 w-20 h-20 text-foreground/10" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="30" r="18" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="28" width="50" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="36" width="40" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="42" width="44" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute top-28 right-12 w-16 h-16 text-foreground/10" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="15" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="35" r="5" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-[35%] left-[5%] w-14 h-14 text-foreground/8" viewBox="0 0 50 50" fill="none">
        <path d="M10 35 L25 10 L40 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="15" y1="35" x2="35" y2="35" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute top-[20%] right-[8%] w-12 h-12 text-foreground/8" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="5" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="35" x2="25" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="5" y1="25" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="35" y1="25" x2="45" y2="25" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute bottom-[38%] right-[12%] w-10 h-10 text-foreground/8" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="5" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="2" transform="rotate(15 20 20)" />
      </svg>
      <svg className="absolute top-[40%] left-[10%] w-8 h-8 text-foreground/6" viewBox="0 0 30 30" fill="none">
        <path d="M15 2 L18 12 L28 12 L20 18 L23 28 L15 22 L7 28 L10 18 L2 12 L12 12 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Cloud shape background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none">
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path
            fill="hsl(45, 50%, 88%)"
            d="M0,200 C120,100 240,280 400,180 C560,80 640,260 800,180 C960,100 1080,260 1200,180 C1320,100 1380,200 1440,180 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      {/* Outlined title text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-foreground text-center leading-[0.85] z-10 mb-0"
        style={{
          WebkitTextStroke: '2px hsl(45, 60%, 92%)',
          color: 'transparent',
          paintOrder: 'stroke fill',
        }}
      >
        DELICIOUS<br />BURGERS
      </motion.h1>

      {/* Hero burger image overlapping the title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 -mt-16 md:-mt-24"
      >
        <img
          src={heroHandsBurger}
          alt="Delicious gourmet cheeseburger"
          width={900}
          height={900}
          className="w-[300px] sm:w-[380px] md:w-[460px] lg:w-[520px] drop-shadow-2xl"
        />
      </motion.div>

      {/* Reserve badge */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 12 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-[12%] top-[52%] z-20 hidden md:flex"
      >
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary animate-[spin_12s_linear_infinite]">
            <defs>
              <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
            </defs>
            <text fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="'Lilita One', cursive">
              <textPath href="#circlePath">★ Reserve a Table ★ Reserve a Table </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-xl">↗</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
