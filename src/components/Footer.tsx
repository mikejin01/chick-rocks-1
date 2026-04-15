const Footer = () => (
  <footer className="bg-muted py-12 px-6 md:px-12 text-center">
    <span className="font-display text-3xl text-foreground">BUNBITE</span>
    <p className="text-muted-foreground text-sm mt-3">© 2026 BunBite. All rights reserved. Made with 🍔</p>
    <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
      <a href="#" className="hover:text-primary transition-colors">Instagram</a>
      <a href="#" className="hover:text-primary transition-colors">TikTok</a>
      <a href="#" className="hover:text-primary transition-colors">Twitter</a>
    </div>
  </footer>
);

export default Footer;
