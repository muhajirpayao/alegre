import { Coffee, Shirt, Wifi, Music, ShoppingBag, Leaf } from "lucide-react";
import TagBadge from "./TagBadge";

export default function DualIdentity() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl mb-16">
          <TagBadge tone="canvas" className="mb-5">Two Rooms, One Door</TagBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-[0.92]">
            One counter pulls the shots.
            <br />
            One rack holds the finds.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Coffee side */}
          <div id="coffee" className="scroll-mt-24 border border-ink/10 bg-canvas-soft rounded-sm p-8 sm:p-10">
            <Coffee size={30} strokeWidth={1.5} className="text-brass mb-6" />
            <h3 className="font-display text-2xl font-bold uppercase mb-3">The Coffee</h3>
            <p className="font-body text-ink-soft leading-relaxed mb-7">
              Milk-balanced espresso, house sodas, and milk teas, brewed for
              people who camp out with a laptop as often as they stop in for a
              quick cup. Consistent, unfussy, and open around the clock.
            </p>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wide text-ink">
              <li className="flex items-center gap-3">
                <Wifi size={16} className="text-olive" /> Strong wifi, made for working
              </li>
              <li className="flex items-center gap-3">
                <Music size={16} className="text-olive" /> Low, easy playlist all day
              </li>
              <li className="flex items-center gap-3">
                <Leaf size={16} className="text-olive" /> Fresh milk, balanced pours
              </li>
            </ul>
          </div>

          {/* Thrift side */}
          <div id="rack" className="scroll-mt-24 border border-ink/10 bg-ink text-canvas-soft rounded-sm p-8 sm:p-10">
            <Shirt size={30} strokeWidth={1.5} className="text-brass-soft mb-6" />
            <h3 className="font-display text-2xl font-bold uppercase mb-3">The Rack — Good Habits</h3>
            <p className="font-body text-canvas-soft/80 leading-relaxed mb-7">
              A tightly-edited secondhand corner run alongside the cafe:
              streetwear, jackets, crewnecks, and outerwear, restocked often
              and picked with an actual eye — not a bargain bin.
            </p>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wide">
              <li className="flex items-center gap-3">
                <ShoppingBag size={16} className="text-brass-soft" /> Korean streetwear &amp; jackets
              </li>
              <li className="flex items-center gap-3">
                <ShoppingBag size={16} className="text-brass-soft" /> Women's section &amp; outdoor pieces
              </li>
              <li className="flex items-center gap-3">
                <ShoppingBag size={16} className="text-brass-soft" /> Racks restocked regularly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
