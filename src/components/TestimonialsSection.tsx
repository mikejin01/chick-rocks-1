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
    text: "CHICK ROCKS IS MY GO TO SPOT. SO MANY FUN COMBOS AND NEVER DISAPPOINTING!",
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
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      {/* Background SVG food art decorations */}
      <svg className="absolute top-8 left-[5%] w-16 h-16 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="28" />
        <path d="M18 38c4-8 24-8 28 0" />
        <circle cx="24" cy="26" r="3" />
        <circle cx="40" cy="26" r="3" />
      </svg>
      <svg className="absolute top-20 right-[8%] w-14 h-14 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="20" width="40" height="28" rx="4" />
        <path d="M20 28h24M20 36h16" />
      </svg>
      <svg className="absolute bottom-16 left-[10%] w-12 h-12 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 48 L32 8 L48 48 Z" />
        <circle cx="32" cy="36" r="4" />
      </svg>
      <svg className="absolute top-1/2 left-[3%] w-10 h-10 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 8l6 18h18l-14 10 5 18-15-11-15 11 5-18L8 26h18z" />
      </svg>
      <svg className="absolute bottom-24 right-[5%] w-14 h-14 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="32" cy="44" rx="22" ry="8" />
        <path d="M10 44c0-20 44-20 44 0" />
        <path d="M14 34c0-10 36-10 36 0" />
      </svg>
      <svg className="absolute top-12 left-[40%] w-8 h-8 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="12" />
        <circle cx="32" cy="32" r="4" />
      </svg>
      <svg className="absolute bottom-12 right-[35%] w-10 h-10 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="16" y="24" width="32" height="20" rx="3" />
        <path d="M22 24V18a10 10 0 0120 0v6" />
      </svg>
      <svg className="absolute top-[30%] right-[15%] w-10 h-10 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 48V16M44 48V16M16 32h32" />
      </svg>
      <svg className="absolute bottom-[40%] left-[15%] w-12 h-12 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 44h40M16 36h32M20 28h24" />
        <ellipse cx="32" cy="20" rx="16" ry="8" />
      </svg>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4"
        >
          BITES OF HAPPINESS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-sm md:text-base max-w-xl mx-auto mb-16"
        >
          See why customers keep rating us five stars for taste, freshness, and premium quality flavor in every bite.
        </motion.p>
      </div>

      {/* Full-width overflow carousel */}
      <div className="relative z-10 flex items-center justify-center min-h-[300px]">
        {/* Left card — peeking from offscreen */}
        <div className="absolute left-0 -translate-x-[30%] md:-translate-x-[15%] w-[340px] md:w-[400px] rotate-[-3deg]">
          <div className="bg-background border border-foreground/20 rounded-2xl p-6 md:p-8">
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: testimonials[getIndex(-1)].stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-foreground/40 text-foreground/40" />
              ))}
            </div>
            <p className="font-display text-foreground/60 text-sm md:text-base leading-relaxed">
              {testimonials[getIndex(-1)].text}
            </p>
            <p className="text-foreground/40 text-sm mt-4">{testimonials[getIndex(-1)].name}</p>
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
            className="w-[90vw] max-w-lg relative z-20"
          >
            <div className="bg-card rounded-2xl p-8 md:p-10 text-center shadow-2xl">
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-card-foreground text-card-foreground" />
                ))}
              </div>
              <p className="font-display text-card-foreground text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                {testimonials[current].text}
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                  <span className="text-foreground text-sm font-bold">
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

        {/* Right card — peeking from offscreen */}
        <div className="absolute right-0 translate-x-[30%] md:translate-x-[15%] w-[340px] md:w-[400px] rotate-[3deg]">
          <div className="bg-background border border-foreground/20 rounded-2xl p-6 md:p-8">
            <div className="flex justify-end gap-0.5 mb-3">
              {Array.from({ length: testimonials[getIndex(1)].stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-foreground/40 text-foreground/40" />
              ))}
            </div>
            <p className="font-display text-foreground/60 text-sm md:text-base leading-relaxed text-right">
              {testimonials[getIndex(1)].text}
            </p>
            <p className="text-foreground/40 text-sm mt-4 text-right">{testimonials[getIndex(1)].name}</p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-10 relative z-10">
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
    </section>
  );
};

export default TestimonialsSection;
