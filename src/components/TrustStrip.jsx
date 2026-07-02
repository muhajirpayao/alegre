import { Star } from "lucide-react";
import Reveal from "./Reveal";
import useCountUp from "../hooks/useCountUp";

const NOTES = [
  {
    quote: "The thrift nook is the real surprise — genuinely well-curated racks next to genuinely good coffee.",
    tag: "on the rack",
  },
  {
    quote: "Strong wifi, low noise, right amount of milk in the coffee. My go-to for study sessions.",
    tag: "on the work-from",
  },
  {
    quote: "Relaxed music, easy staff, the kind of ambiance that makes a first-date coffee feel unforced.",
    tag: "on the mood",
  },
];

function RatingStat() {
  const [ref, display] = useCountUp(4.9, { decimals: 1, duration: 1400 });
  return (
    <span ref={ref} className="font-display text-6xl sm:text-7xl font-black text-ink">
      {display}
    </span>
  );
}

function ReviewCountStat() {
  const [ref, display] = useCountUp(20, { duration: 1400 });
  return (
    <span ref={ref} className="font-display text-6xl sm:text-7xl font-black text-ink">
      {display}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section id="trust" className="scroll-mt-36 bg-canvas-soft border-y border-ink/10 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brass">
              Real Google Reviews
            </p>
            <h2 className="font-display text-4xl font-extrabold uppercase leading-none sm:text-5xl">
              Trusted by Zamboanga Regulars
            </h2>
          </div>
          <div className="flex items-center gap-10">
            <div>
              <RatingStat />
              <p className="mt-1 flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                <Star size={12} className="fill-brass text-brass" /> Average rating
              </p>
            </div>
            <div>
              <ReviewCountStat />
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                Google reviews
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {NOTES.map((n, i) => (
            <Reveal key={n.tag} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between border-t-2 border-ink/15 pt-6">
                <blockquote className="font-body text-[15px] leading-relaxed text-ink">
                  "{n.quote}"
                </blockquote>
                <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                  — {n.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
