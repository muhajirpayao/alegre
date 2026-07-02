import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const REGULARS = [
  {
    initials: "MJ",
    name: "Freelance regular",
    role: "Here most weekday mornings",
    quote: "I've written half a portfolio at that corner table by the rack.",
    tone: "bg-olive",
  },
  {
    initials: "KD",
    name: "Thrift hunter",
    role: "Checks the rack weekly",
    quote: "New drops sneak in quietly — you have to actually come back for them.",
    tone: "bg-brass",
  },
  {
    initials: "RS",
    name: "Night owl",
    role: "Comes in after midnight",
    quote: "24 hours means something here — it's genuinely open when I need it.",
    tone: "bg-rust",
  },
];

export default function Regulars() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28 bg-canvas-soft border-y border-ink/10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-3">
            Who You'll Find Here
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-[0.92]">
            The regulars keep
            <br />
            different hours.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {REGULARS.map((r, i) => (
            <Reveal key={r.initials} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-canvas border border-ink/10 rounded-sm p-7 h-full flex flex-col"
              >
                <div
                  className={`${r.tone} w-12 h-12 rounded-full flex items-center justify-center text-canvas-soft font-display font-bold text-lg mb-6`}
                >
                  {r.initials}
                </div>
                <Quote size={18} className="text-ink/20 mb-3" />
                <p className="font-body text-[15px] leading-relaxed text-ink mb-6 flex-1">
                  "{r.quote}"
                </p>
                <div>
                  <p className="font-display text-base font-bold uppercase leading-none">{r.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mt-1">{r.role}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
