const items = ["HAPPY BITES", "FUN FLAVORS", "SO TASTY", "FAST & FRESH", "SNACK TIME", "JUICY GOODNESS"];

const MarqueeStrip = () => {
  return (
    <div className="relative z-20 bg-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-sm md:text-base text-primary-foreground mx-6 flex items-center gap-3">
            <span className="text-primary-foreground">★</span> {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
