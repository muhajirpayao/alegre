import { Star, ArrowDownRight, Coffee, Shirt } from "lucide-react";
import TagBadge from "./TagBadge";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-5 sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <TagBadge tone="ink" className="-rotate-2">Open 24 Hours</TagBadge>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-soft">
            <Star size={14} className="fill-brass text-brass" />
            4.9 · Tumaga-Putik Rd, Zamboanga City
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">
          <div>
            <h1 className="font-display font-black uppercase leading-[0.88] text-[15vw] sm:text-[9vw] lg:text-[5.6vw] tracking-tight">
              Coffee on
              <br />
              one rack.
              <br />
              <span className="text-brass">Thrift</span> on
              <br />
              the other.
            </h1>
            <p className="mt-8 max-w-md font-body text-base sm:text-lg text-ink-soft leading-relaxed">
              Alegre Coffee &amp; More is Zamboanga City's slow-morning, late-night
              spot — a working cafe with a hand-picked thrift corner tucked
              between the espresso bar and the good light. Come for the brew,
              stay for the racks, work from either.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#visit"
                className="focus-ring inline-flex items-center gap-2 rounded-sm bg-rust text-canvas-soft font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:bg-ink transition-colors"
              >
                Get Directions
                <ArrowDownRight size={16} />
              </a>
              <a
                href="#menu"
                className="focus-ring inline-flex items-center gap-2 rounded-sm border border-ink/25 font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:border-ink hover:bg-ink hover:text-canvas-soft transition-colors"
              >
                See the Menu
              </a>
            </div>
          </div>

          {/* signature visual: two overlapping tag-shaped panels standing in for coffee + thrift photography */}
          <div className="relative h-72 sm:h-96 lg:h-[26rem]">
            <div className="grain absolute right-0 top-6 w-[78%] h-[85%] bg-gradient-to-br from-[#4E5B3D] to-[#2E3626] rounded-sm shadow-xl -rotate-3 flex items-end p-6">
              <div className="text-canvas-soft">
                <Shirt size={28} strokeWidth={1.5} className="mb-3 opacity-90" />
                <p className="font-mono text-[11px] uppercase tracking-widest opacity-80">Good Habits</p>
                <p className="font-display text-2xl font-bold leading-none">The Thrift Rack</p>
              </div>
            </div>
            <div className="grain absolute left-0 bottom-0 w-[62%] h-[62%] bg-gradient-to-br from-[#93701F] to-[#5C4415] rounded-sm shadow-xl rotate-2 flex items-end p-6">
              <div className="text-canvas-soft">
                <Coffee size={26} strokeWidth={1.5} className="mb-3 opacity-90" />
                <p className="font-mono text-[11px] uppercase tracking-widest opacity-80">Slow Bar</p>
                <p className="font-display text-2xl font-bold leading-none">Espresso &amp; Brew</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
