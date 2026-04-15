import { motion } from "framer-motion";
import friendsEating from "@/assets/friends-eating.jpg";

const ReservationSection = () => {
  return (
    <section className="bg-background py-0 relative overflow-hidden">
      {/* Organic blob shape background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1440 700" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,100 C200,0 400,50 720,80 C1040,110 1240,0 1440,100 L1440,600 C1240,700 1040,650 720,620 C400,590 200,700 0,600 Z"
            fill="hsl(var(--background))"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-primary rounded-[2rem] overflow-hidden grid md:grid-cols-2 min-h-[500px]">
          {/* Form side */}
          <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-primary-foreground mb-3"
            >
              RESERVE YOUR TABLE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/70 text-sm mb-8"
            >
              Book your spot and enjoy fresh, fun, and flavorful burgers with your favorite people.
            </motion.p>

            <form className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select className="bg-card text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>GUEST</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  placeholder="DD/MM/YY"
                  className="bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="time"
                  placeholder="00:00"
                  className="bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <textarea
                placeholder="YOUR MESSAGE"
                rows={3}
                className="w-full bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-lg px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
              <button
                type="button"
                className="w-full border-2 border-primary-foreground text-primary-foreground font-display text-sm py-3 rounded-full hover:bg-primary-foreground hover:text-primary transition-colors mt-2"
              >
                MAKE A RESERVATION
              </button>
            </form>
          </div>

          {/* Image side */}
          <div className="relative hidden md:block">
            <img
              src={friendsEating}
              alt="Friends enjoying burgers together"
              loading="lazy"
              width={800}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
