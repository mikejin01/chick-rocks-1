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
      <div className="max-w-6xl mx-auto relative pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left features */}
          <div className="flex flex-col gap-12">
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
          <div className="flex flex-col gap-12">
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
        <svg viewBox="0 0 1440 120" className="w-full block" preserveAspectRatio="none">
          <path
            fill="hsl(147, 35%, 18%)"
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
