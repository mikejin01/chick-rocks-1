import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily Grace",
    text: "I LOVE HOW FRESH EVERYTHING TASTES! THE FLAVORS ARE AMAZING, AND THE BURGERS ARE ALWAYS JUICY AND SATISFYING.",
    stars: 5,
  },
  {
    name: "Laras",
    text: "INCREDIBLE TASTE, AND SUPER HANDS DOWN ONE OF THE BEST BURGERS I'VE HAD!",
    stars: 5,
  },
  {
    name: "Daniel K.",
    text: "BUNBITE IS MY GO TO SPOT. SO MANY FUN COMBOS AND NEVER DISAPPOINTING!",
    stars: 5,
  },
  {
    name: "Sarah M.",
    text: "THE FRIED CHICKEN IS OUT OF THIS WORLD. CRISPY, JUICY, AND PERFECTLY SEASONED EVERY TIME.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const getIndex = (offset: number) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <section className="bg-background py-20 px-6 relative overflow-hidden">
      {/* Subtle SVG background decorations */}
      <svg className="absolute top-10 left-10 w-24 h-24 text-foreground/5" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="45" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-32 h-32 text-foreground/5" viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="45" />
      </svg>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground italic mb-4"
        >
          BITES OF HAPPINESS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-sm md:text-base max-w-xl mx-auto mb-14"
        >
          See why customers keep rating us five stars for taste, freshness, and premium quality flavor in every bite.
        </motion.p>

        {/* Testimonial cards carousel */}
        <div className="relative flex items-center justify-center gap-4 md:gap-6 min-h-[260px]">
          {/* Side card left */}
          <div className="hidden md:block w-64 opacity-40 scale-90 flex-shrink-0">
            <div className="bg-primary/20 border border-primary/30 rounded-2xl p-6 text-left">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonials[getIndex(-1)].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-foreground text-xs leading-relaxed line-clamp-3">
                {testimonials[getIndex(-1)].text}
              </p>
              <p className="text-foreground/50 text-xs mt-3">{testimonials[getIndex(-1)].name}</p>
            </div>
          </div>

          {/* Center card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md flex-shrink-0"
            >
              <div className="bg-card border-2 border-primary rounded-2xl p-8 text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-card-foreground text-sm md:text-base leading-relaxed mb-6">
                  {testimonials[current].text}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                    <span className="text-foreground text-xs font-bold">
                      {testimonials[current].name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-card-foreground text-sm font-medium">
                    {testimonials[current].name}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Side card right */}
          <div className="hidden md:block w-64 opacity-40 scale-90 flex-shrink-0">
            <div className="bg-primary/20 border border-primary/30 rounded-2xl p-6 text-left">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonials[getIndex(1)].stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-foreground text-xs leading-relaxed line-clamp-3">
                {testimonials[getIndex(1)].text}
              </p>
              <p className="text-foreground/50 text-xs mt-3">{testimonials[getIndex(1)].name}</p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-foreground/30 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
