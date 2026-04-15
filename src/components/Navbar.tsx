const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/90 backdrop-blur-sm">
      <a href="#" className="flex items-center gap-2">
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Chick Rocks logo" className="w-10 h-10 brightness-0 invert" />
        <span className="font-display text-2xl text-foreground tracking-wide">CHICK ROCKS</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider text-foreground">
        <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <button className="border-2 border-foreground text-foreground font-bold text-sm uppercase px-5 py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
        Order Now
      </button>
    </nav>
  );
};

export default Navbar;
