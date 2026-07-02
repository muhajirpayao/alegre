import { Star } from "lucide-react";

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

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-canvas-soft px-5 sm:px-8 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brass mb-2">Real Google Reviews</p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-none">
              Trusted by Zamboanga Regulars
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl font-black text-ink">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-brass text-brass" />
                ))}
              </div>
              <p className="font-mono text-xs text-ink-soft mt-1">20 Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {NOTES.map((n) => (
            <figure
              key={n.tag}
              className="bg-canvas border border-ink/10 rounded-sm p-6 flex flex-col justify-between h-full"
            >
              <blockquote className="font-body text-[15px] leading-relaxed text-ink">
                “{n.quote}”
              </blockquote>
              <figcaption className="mt-5 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                — {n.tag}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
