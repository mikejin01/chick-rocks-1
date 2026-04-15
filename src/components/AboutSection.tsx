import { motion } from "framer-motion";
import aboutBurger from "@/assets/about-burger.png";

const features = [
  { num: "1", icon: "🥬", title: "FRESH INGREDIENTS", desc: "Sourced daily, our beef, buns, and veggies deliver unbeatable freshness and flavor in every bite.", side: "left" },
  { num: "2", icon: "🍔", title: "FUN FLAVOR COMBOS", desc: "Playful sauces, cheesy layers, and bold toppings come together for exciting taste experiences.", side: "left" },
  { num: "3", icon: "🎯", title: "CUSTOM YOUR WAY", desc: "Choose your bun, patty, toppings, and sauce to enjoy a burger made just for you.", side: "right" },
  { num: "4", icon: "🚀", title: "FAST DELIVERY", desc: "Hot, juicy burgers delivered quickly so you can enjoy happiness without the wait.", side: "right" },
];

const AboutSection = () => {
  const leftFeatures = features.filter(f => f.side === "left");
  const rightFeatures = features.filter(f => f.side === "right");

  return (
    <section id="about" className="relative bg-card pt-16 pb-0 px-6 md:px-12 overflow-hidden">
      {/* Subtle SVG illustrations on cream background */}
      <svg className="absolute top-8 left-6 w-12 h-12 text-card-foreground/8" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="20" r="10" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="18" width="30" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="23" width="26" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-12 right-10 w-10 h-10 text-card-foreground/8" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-32 left-10 w-10 h-10 text-card-foreground/6" viewBox="0 0 40 40" fill="none">
        <path d="M20 5 L23 15 L33 15 L25 21 L28 31 L20 25 L12 31 L15 21 L7 15 L17 15 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-40 right-8 w-8 h-8 text-card-foreground/6" viewBox="0 0 30 30" fill="none">
        <rect x="5" y="5" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(15 15 15)" />
      </svg>

      {/* Title */}
      <div className="max-w-5xl mx-auto text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-card-foreground mb-4"
        >
          WHAT MAKES<br />BUNBITE DIFFERENT?
        </motion.h2>
        <p className="text-card-foreground/60 max-w-lg mx-auto text-sm md:text-base">
          Where fresh ingredients meet fun flavors, and your perfect burger comes to life, one tasty bite.
        </p>
      </div>

      {/* Features grid with center burger */}
      <div className="max-w-6xl mx-auto relative pb-28 md:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-14">
            {leftFeatures.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center md:text-right"
              >
                <div className="flex items-center gap-2 justify-center md:justify-end mb-1">
                  <span className="bg-primary text-primary-foreground font-display text-xs w-6 h-6 rounded-full flex items-center justify-center">
                    {f.num}
                  </span>
                  <span className="text-lg">{f.icon}</span>
                  <h3 className="font-display text-base md:text-lg text-card-foreground">{f.title}</h3>
                </div>
                <p className="text-card-foreground/55 text-xs md:text-sm leading-relaxed max-w-xs ml-auto">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Center burger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={aboutBurger}
              alt="Stacked gourmet burger"
              loading="lazy"
              width={768}
              height={1024}
              className="w-60 md:w-72 lg:w-80 drop-shadow-2xl"
            />
          </motion.div>

          {/* Right features */}
          <div className="flex flex-col gap-14">
            {rightFeatures.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center md:text-left"
              >
                <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                  <span className="bg-primary text-primary-foreground font-display text-xs w-6 h-6 rounded-full flex items-center justify-center">
                    {f.num}
                  </span>
                  <span className="text-lg">{f.icon}</span>
                  <h3 className="font-display text-base md:text-lg text-card-foreground">{f.title}</h3>
                </div>
                <p className="text-card-foreground/55 text-xs md:text-sm leading-relaxed max-w-xs">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave transition back to dark green */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 100" className="w-full block" preserveAspectRatio="none" style={{ height: '80px' }}>
          <path
            fill="hsl(147, 35%, 18%)"
            d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
