const MENU = [
  { name: "Alegre Signature Latte", price: "120", note: "House blend, steamed whole milk" },
  { name: "Spanish Latte", price: "130", note: "Condensed milk, double shot" },
  { name: "Iced Americano", price: "100", note: "Slow-bloomed, over ice" },
  { name: "Matcha Milk Tea", price: "135", note: "Whisked to order" },
  { name: "House Fruit Soda", price: "115", note: "Rotating seasonal fruit" },
  { name: "Cold Brew Float", price: "145", note: "Vanilla ice cream, cold brew" },
];

export default function Menu() {
  return (
    <section id="menu" className="scroll-mt-24 px-5 sm:px-8 py-20 sm:py-28 bg-canvas-soft border-y border-ink/10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-none">
            From the Bar
          </h2>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft max-w-xs">
            A short pull of regulars' favorites — full menu on the counter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          {MENU.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-4 py-4 border-b border-ink/10"
            >
              <div>
                <p className="font-display text-lg font-bold uppercase leading-tight">{item.name}</p>
                <p className="font-body text-sm text-ink-soft mt-0.5">{item.note}</p>
              </div>
              <span className="tag shrink-0 bg-ink text-canvas-soft font-mono text-sm pl-4 pr-3 py-1.5">
                <span className="tag-hole" />
                ₱{item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
