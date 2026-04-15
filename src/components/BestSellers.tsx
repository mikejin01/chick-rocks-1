import { motion } from "framer-motion";
import { Star } from "lucide-react";
import heroBurger from "@/assets/hero-burger.png";
import chickenBurger from "@/assets/chicken-burger.png";
import smokyBurger from "@/assets/smoky-burger.png";

const sellers = [
  {
    name: "MIDNIGHT BITE",
    desc: "Smoky mustard, onion rings, and smoked bacon",
    price: "$15.00",
    img: heroBurger,
    cardColor: "bg-primary",
  },
  {
    name: "CHEESY BOOM",
    desc: "Cheese sauce, beef patty, and garlic butter bun",
    price: "$17.00",
    img: chickenBurger,
    cardColor: "bg-destructive",
  },
  {
    name: "SMOKY BEAST",
    desc: "BBQ sauce, beef bacon, and caramelized onions",
    price: "$14.00",
    img: smokyBurger,
    cardColor: "bg-[hsl(170,40%,30%)]",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 justify-center mb-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

const BestSellers = () => {
  return (
    <section className="bg-card py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-card-foreground mb-3"
            >
              BEST SELLERS
            </motion.h2>
            <p className="text-card-foreground/60 max-w-md text-sm md:text-base">
              The burgers everyone raves about, known for their rich taste, fresh ingredients, and crave-worthy sauce combinations.
            </p>
          </div>
          <a
            href="#menu"
            className="mt-4 md:mt-0 border-2 border-card-foreground text-card-foreground font-display text-sm px-6 py-2 rounded-full hover:bg-card-foreground hover:text-card transition-colors self-start md:self-auto"
          >
            SHOP ALL
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {sellers.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Colored top with image */}
              <div className={`${item.cardColor} relative pt-6 px-6 flex items-end justify-center h-56 md:h-64`}>
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-44 md:w-52 object-contain drop-shadow-xl"
                />
              </div>

              {/* Info bottom */}
              <div className="bg-card border-2 border-card-foreground/10 rounded-b-2xl p-5 text-center flex-1 flex flex-col items-center">
                <Stars />
                <h3 className="font-display text-xl md:text-2xl text-card-foreground mb-1">{item.name}</h3>
                <p className="text-card-foreground/50 text-xs md:text-sm mb-3">{item.desc}</p>
                <span className="font-display text-xl text-card-foreground mb-4">{item.price}</span>
                <button className="mt-auto border-2 border-background text-background font-display text-xs px-6 py-2 rounded-full hover:bg-background hover:text-foreground transition-colors">
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
