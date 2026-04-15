import { motion } from "framer-motion";
import ctaBurgers from "@/assets/cta-burgers.jpg";

const CtaSection = () => {
  return (
    <section className="bg-card py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0">
          {/* Text side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-card-foreground leading-tight mb-6"
            >
              WE DON'T DO FAST FOOD.<br />
              WE DO GOOD FOOD, COOKED FAST.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-card-foreground/70 text-sm md:text-base mb-4 leading-relaxed"
            >
              Every single morning, we hand-grind premium local steak beef. We smash it thin on a screaming hot griddle to create those iconic, craggy, caramelized edges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-card-foreground/70 text-sm md:text-base mb-8 leading-relaxed"
            >
              Our chicken? Hand-breaded in house and fried to an aggressive crunch. No shortcuts. No compromises.
            </motion.p>
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-2 border-card-foreground text-card-foreground font-display text-sm px-6 py-2.5 rounded-full hover:bg-card-foreground hover:text-card transition-colors self-start flex items-center gap-2"
            >
              About Us <span>›</span>
            </motion.a>
          </div>

          {/* Image side */}
          <div className="relative">
            <img
              src={ctaBurgers}
              alt="Fresh burgers being served"
              loading="lazy"
              width={1024}
              height={800}
              className="w-full h-full object-cover rounded-2xl min-h-[300px]"
            />
            <div className="absolute top-6 left-6 bg-accent text-accent-foreground rounded-full w-20 h-20 flex flex-col items-center justify-center font-display text-[10px] leading-tight text-center">
              <span>100% LOCAL</span>
              <span>Premium Beef</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
