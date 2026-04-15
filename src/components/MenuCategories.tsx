import { motion } from "framer-motion";
import catSandwiches from "@/assets/cat-sandwiches.png";
import catPlates from "@/assets/cat-plates.png";
import catDrinks from "@/assets/cat-drinks.png";
import catBurgers from "@/assets/cat-burgers.png";
import catExtras from "@/assets/cat-extras.png";
import catSides from "@/assets/cat-sides.png";

const categories = [
  { name: "Sandwiches", img: catSandwiches },
  { name: "Plates", img: catPlates },
  { name: "Drinks", img: catDrinks },
  { name: "Burgers", img: catBurgers },
  { name: "Extras", img: catExtras },
  { name: "Sides", img: catSides },
];

const MenuCategories = () => {
  return (
    <section className="bg-background py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-card-foreground text-center mb-10"
        >
          WHAT'S ON THE MENU?
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="bg-primary/15 rounded-2xl p-4 w-full aspect-square flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-16 md:w-20 h-16 md:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="font-body text-sm md:text-base font-medium text-card-foreground">
                {cat.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
