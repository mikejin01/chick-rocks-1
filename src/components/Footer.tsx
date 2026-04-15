import heroBurger from "@/assets/hero-burger.png";

const Footer = () => (
  <footer>
    {/* Checkered strip */}
    <div className="h-10 bg-[repeating-conic-gradient(hsl(var(--primary))_0%_25%,hsl(var(--foreground))_0%_50%)_0_0/40px_40px]" />

    {/* Main footer */}
    <div className="bg-primary py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-1">
          <span className="font-display text-3xl text-primary-foreground block mb-1">BUNBITE</span>
          <p className="text-primary-foreground/60 text-xs mb-4">BURGER & FRIED CHICKEN</p>
          <div className="flex gap-3 text-primary-foreground/80">
            <a href="#" aria-label="Facebook" className="hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="X" className="hover:text-primary-foreground transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display text-sm text-primary-foreground mb-3 underline underline-offset-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-display text-sm text-primary-foreground mb-3 underline underline-offset-4">Menu</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Burgers</a></li>
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Plates</a></li>
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Sides</a></li>
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Extras</a></li>
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Drinks</a></li>
            <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Sandwiches</a></li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-display text-sm text-primary-foreground mb-3 underline underline-offset-4">Location & Hours</h4>
          <p className="text-sm text-primary-foreground/70 mb-3">
            22 - El Horeya Street,<br />
            Heliopolis, Cairo<br />
            Floor 1, Apartment 4
          </p>
          <p className="text-sm text-primary-foreground/70">
            Mon – Fri: 7 AM – 6 PM<br />
            Sat: 8 AM – 4 PM
          </p>
        </div>

        {/* Burger image */}
        <div className="hidden md:flex items-center justify-center">
          <img src={heroBurger} alt="BunBite burger" loading="lazy" width={600} height={600} className="w-36 drop-shadow-lg" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/50 gap-2">
        <span>© Copyright BunBite Inc. 2026</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary-foreground transition-colors">Privacy policy</a>
          <a href="#" className="hover:text-primary-foreground transition-colors">Terms of use</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
