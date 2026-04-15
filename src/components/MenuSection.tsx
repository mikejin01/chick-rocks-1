import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.png";
import chickenBurger from "@/assets/chicken-burger.png";

const menuItems = [
  { name: "Classic Smash", price: "$8.99", img: heroBurger, desc: "Double patty, american cheese, pickles, secret sauce" },
  { name: "Crispy Chicken", price: "$9.49", img: chickenBurger, desc: "Fried chicken, slaw, pickles, spicy mayo" },
  { name: "The Big Bun", price: "$11.99", img: heroBurger, desc: "Triple stack, bacon, jalapeños, cheddar melt" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-center mb-12"
        >
          OUR MENU
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-muted rounded-2xl p-6 flex flex-col items-center text-center group hover:bg-primary/20 transition-colors"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={600}
                height={600}
                className="w-36 h-36 object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display text-xl text-foreground mb-1">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.desc}</p>
              <span className="font-display text-2xl text-primary">{item.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
