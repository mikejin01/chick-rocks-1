import { motion } from "framer-motion";
import chickenBurger from "@/assets/chicken-burger.png";

const features = [
  { num: "1", title: "FRESH INGREDIENTS", desc: "Sourced daily, our beef, buns, and veggies deliver unbeatable freshness and flavor in every bite." },
  { num: "2", title: "GRILLED TO PERFECTION", desc: "Each patty flame-grilled to lock in juicy flavor with a perfect sear every single time." },
  { num: "3", title: "CUSTOM YOUR WAY", desc: "Choose your bun, patty, toppings, and sauce to enjoy a burger made just for you." },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-card py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-card-foreground mb-4"
        >
          WHAT MAKES<br />BUNBITE DIFFERENT?
        </motion.h2>
        <p className="text-card-foreground/70 max-w-lg mx-auto mb-12 text-base">
          Where fresh ingredients meet fun flavors, and your perfect burger comes to life, one tasty bite.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {i === 1 && (
                <img src={chickenBurger} alt="Chicken burger" loading="lazy" width={600} height={600} className="w-48 mb-4 drop-shadow-lg" />
              )}
              <span className="bg-primary text-primary-foreground font-display text-sm w-8 h-8 rounded-full flex items-center justify-center mb-3">
                {f.num}
              </span>
              <h3 className="font-display text-lg text-card-foreground mb-2">{f.title}</h3>
              <p className="text-card-foreground/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
