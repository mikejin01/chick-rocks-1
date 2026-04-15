import { motion } from "framer-motion";


const ReservationSection = () => {
  return (
    <section className="relative bg-background pt-0 pb-0 overflow-hidden">
      {/* Green background with cloud bottom */}
      <div className="relative bg-background">
        {/* SVG background decorations */}
        <svg className="absolute top-8 left-[5%] w-14 h-14 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="30" r="18" />
          <rect x="10" y="28" width="44" height="8" rx="4" />
          <rect x="14" y="36" width="36" height="6" rx="3" />
        </svg>
        <svg className="absolute top-20 right-[6%] w-12 h-12 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="16" y="20" width="32" height="28" rx="4" />
          <path d="M24 28h16M24 36h10" />
        </svg>
        <svg className="absolute bottom-[30%] left-[8%] w-10 h-10 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8l6 18h18l-14 10 5 18-15-11-15 11 5-18L8 26h18z" />
        </svg>
        <svg className="absolute top-[40%] right-[3%] w-16 h-16 text-foreground/[0.06]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="32" cy="44" rx="22" ry="8" />
          <path d="M10 44c0-20 44-20 44 0" />
        </svg>

        <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
          <div className="bg-card rounded-[2rem] overflow-hidden grid md:grid-cols-2 min-h-[480px]">
            {/* Form side */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl md:text-4xl text-card-foreground mb-3 italic"
              >
                RESERVE YOUR TABLE
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-card-foreground/70 text-sm mb-8"
              >
                Book your spot and enjoy fresh, fun, and flavorful burgers with your favorite people.
              </motion.p>

              <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="FULL NAME" className="bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                  <input type="email" placeholder="EMAIL ADDRESS" className="bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="tel" placeholder="PHONE NUMBER" className="bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                  <select className="bg-card border border-card-foreground/20 text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>GUEST</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="date" className="bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                  <input type="time" className="bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <textarea placeholder="YOUR MESSAGE" rows={4} className="w-full bg-card border border-card-foreground/20 text-card-foreground placeholder:text-card-foreground/40 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
                <button type="button" className="w-full border-2 border-card-foreground text-card-foreground font-display text-sm py-3 rounded-full hover:bg-card-foreground hover:text-card transition-colors mt-2">
                  MAKE A RESERVATION
                </button>
              </form>
            </div>

            {/* Image side */}
            <div className="relative hidden md:block">
              <img src={`${import.meta.env.BASE_URL}store-front.avif`} alt="Chick Rocks store front" loading="lazy" width={800} height={900} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReservationSection;
