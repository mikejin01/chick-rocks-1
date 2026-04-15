import { motion } from "framer-motion";
import heroHandsClean from "@/assets/hero-hands-clean.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-start overflow-hidden pt-24 md:pt-28 bg-background">
      {/* Subtle SVG background illustrations */}
      <svg className="absolute top-20 left-8 w-20 h-20 text-foreground/10" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="30" r="18" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="28" width="50" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
        <rect x="20" y="36" width="40" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="42" width="44" height="8" rx="4" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute top-32 right-12 w-16 h-16 text-foreground/10" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="15" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="35" r="5" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute top-[45%] left-[4%] w-14 h-14 text-foreground/8" viewBox="0 0 50 50" fill="none">
        <path d="M10 35 L25 10 L40 35 Z" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute top-[25%] right-[6%] w-12 h-12 text-foreground/8" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="10" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="5" x2="25" y2="15" stroke="currentColor" strokeWidth="2" />
        <line x1="25" y1="35" x2="25" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="5" y1="25" x2="15" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="35" y1="25" x2="45" y2="25" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="absolute top-[60%] right-[15%] w-10 h-10 text-foreground/6" viewBox="0 0 40 40" fill="none">
        <rect x="5" y="5" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="2" transform="rotate(15 20 20)" />
      </svg>
      <svg className="absolute top-[35%] left-[12%] w-8 h-8 text-foreground/6" viewBox="0 0 30 30" fill="none">
        <path d="M15 2 L18 12 L28 12 L20 18 L23 28 L15 22 L7 28 L10 18 L2 12 L12 12 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Cloud shape background at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none">
        <svg viewBox="0 0 1440 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path
            fill="hsl(45, 50%, 88%)"
            d="M0,200 C120,80 280,300 440,180 C600,60 680,280 840,160 C1000,40 1120,280 1280,160 C1360,100 1400,180 1440,160 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      {/* Outlined title text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] text-center leading-[0.85] z-10 tracking-tight"
        style={{
          WebkitTextStroke: '3px hsl(45, 60%, 85%)',
          color: 'transparent',
          paintOrder: 'stroke fill',
        }}
      >
        DELICIOUS<br />BURGERS
      </motion.h1>

      {/* Hands holding burger - overlapping the title */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 -mt-20 sm:-mt-24 md:-mt-32 lg:-mt-44"
      >
        <img
          src={heroHandsClean}
          alt="Hands holding a delicious cheeseburger"
          width={1024}
          height={1024}
          className="w-[340px] sm:w-[420px] md:w-[520px] lg:w-[620px] xl:w-[700px] drop-shadow-2xl"
        />
      </motion.div>

      {/* Reserve badge */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute right-[8%] md:right-[14%] top-[48%] md:top-[50%] z-20 hidden md:flex"
      >
        <div className="relative w-24 h-24 lg:w-28 lg:h-28">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary animate-[spin_12s_linear_infinite]">
            <defs>
              <path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
            </defs>
            <text fill="currentColor" fontSize="11" fontWeight="bold" fontFamily="'Lilita One', cursive">
              <textPath href="#circlePath">★ Reserve a Table ★ Reserve a Table </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary text-2xl">↗</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
