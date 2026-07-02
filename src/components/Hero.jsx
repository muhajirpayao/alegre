import { motion } from "framer-motion";
import { Star, ArrowDownRight } from "lucide-react";
import TagBadge from "./TagBadge";
import WordCycle from "./WordCycle";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* full-bleed video hero, licensed Mixkit footage (free commercial license, no attribution required) */}
      <div className="absolute inset-0 bg-ink">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://assets.mixkit.co/videos/43941/43941-720.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="https://assets.mixkit.co/videos/43941/43941-thumb-720-0.jpg"
        />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/25" />
        <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* top padding clears the fixed header (ticker row + nav row) so nothing overlaps */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-30 sm:pt-34 pb-24 sm:pb-32 min-h-[86vh] flex flex-col justify-end">
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <TagBadge tone="brass" className="-rotate-2">Open 24 Hours</TagBadge>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-canvas-soft/80">
            <Star size={14} className="fill-brass-soft text-brass-soft" />
            4.9 · Tumaga-Putik Rd, Zamboanga City
          </span>
        </motion.div>

        <motion.p
          className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-brass-soft mb-4 flex items-baseline gap-2"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
        >
          Made for
          <WordCycle
            words={["Coffee Runs", "Late Study Nights", "Thrift Finds", "First Dates", "Slow Mornings"]}
            className="text-canvas-soft font-semibold"
          />
        </motion.p>

        <h1 className="font-display font-black uppercase leading-[0.86] text-[15vw] sm:text-[9vw] lg:text-[5.4vw] tracking-tight text-canvas-soft">
          {["Coffee on one rack.", "Thrift on the other."].map((line, i) => (
            <motion.span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                custom={i + 1}
              >
                {i === 1 ? (
                  <>
                    <span className="text-brass-soft">Thrift</span> on the other.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-8 max-w-md font-body text-base sm:text-lg text-canvas-soft/75 leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          Alegre Coffee &amp; More is Zamboanga City's slow-morning, late-night
          spot — a working cafe with a hand-picked thrift corner tucked
          between the espresso bar and the good light.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-4"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          <motion.a
            href="#visit"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.98 }}
            className="focus-ring inline-flex items-center gap-2 rounded-sm bg-rust text-canvas-soft font-mono text-sm uppercase tracking-wide px-6 py-3.5"
          >
            Get Directions
            <ArrowDownRight size={16} />
          </motion.a>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.035 }}
            whileTap={{ scale: 0.98 }}
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-canvas-soft/30 text-canvas-soft font-mono text-sm uppercase tracking-wide px-6 py-3.5 hover:bg-canvas-soft hover:text-ink transition-colors"
          >
            See the Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
