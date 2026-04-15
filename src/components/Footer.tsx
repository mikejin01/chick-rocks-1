import { motion } from "framer-motion";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const Footer = () => (
  <footer>
    {/* Opening Hours */}
    <section className="bg-card py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl lg:text-5xl text-card-foreground italic mb-10"
        >
          OPENING HOURS
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-card-foreground/70 text-sm font-medium mb-2 tracking-wider">MON TO FRI:</p>
            <p className="font-display text-card-foreground text-4xl md:text-5xl">
              8<span className="text-lg align-top">AM</span> - 10<span className="text-lg align-top">PM</span>
            </p>
          </div>
          <div className="hidden md:block w-px h-16 bg-card-foreground/20" />
          <div className="text-center">
            <p className="text-card-foreground/70 text-sm font-medium mb-2 tracking-wider">SAT TO SUN:</p>
            <p className="font-display text-card-foreground text-4xl md:text-5xl">
              9<span className="text-lg align-top">AM</span> - 12<span className="text-lg align-top">PM</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Main footer */}
    <div className="bg-primary py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Location */}
        <div>
          <h4 className="font-display text-lg text-primary-foreground mb-4">LOCATION</h4>
          <div className="rounded-xl overflow-hidden mb-3 w-36 h-24">
            <img
              src={restaurantInterior}
              alt="BunBite restaurant"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            123 BunBite Street, Downtown<br />
            Food District, New York
          </p>
          <a href="#" className="text-accent text-sm font-medium mt-2 inline-block hover:underline">
            VISIT US ↗
          </a>
        </div>

        {/* About Us */}
        <div className="text-center">
          <h4 className="font-display text-lg text-primary-foreground mb-4">ABOUT US</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
            BunBite serves fresh, juicy burgers with fun flavors and premium ingredients. Every bite is crafted to bring you happiness and unforgettable taste.
          </p>
          <div className="flex justify-center gap-3">
            {["X", "f", "◉", "in"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground/70 hover:border-primary-foreground hover:text-primary-foreground transition-colors text-xs font-bold"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-display text-lg text-primary-foreground mb-4">CONTACT US</h4>
          <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
            Join our email list for promotions, giveaways, and other communications from BunBite.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-card text-card-foreground placeholder:text-card-foreground/50 rounded-l-lg px-4 py-2.5 text-xs focus:outline-none"
            />
            <button className="bg-accent text-accent-foreground font-display text-xs px-4 py-2.5 rounded-r-lg hover:bg-accent/90 transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 gap-3">
        <div className="flex gap-6">
          <span>📞 +1(555) 123-4567</span>
          <span>✉ hello@bunbite.com</span>
        </div>
        <span>All Rights Reserved ©Bunbite 2026</span>
      </div>
    </div>
  </footer>
);

export default Footer;
