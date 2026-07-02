import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import TagBadge from "./TagBadge";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-36 px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl mb-14">
          <TagBadge tone="brass" className="mb-5 -rotate-1">Come Through</TagBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-[0.92]">
            Find the rack.
            <br />
            Stay for a cup.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-stretch">
          <Reveal direction="left" className="flex flex-col gap-5">
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="border border-ink/10 bg-canvas-soft rounded-sm p-7">
              <Clock size={22} className="text-brass mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-1">Hours</p>
              <p className="font-display text-2xl font-bold uppercase">Open 24 Hours</p>
              <p className="font-body text-sm text-ink-soft mt-1">Every day, coffee never stops pulling.</p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="border border-ink/10 bg-canvas-soft rounded-sm p-7">
              <MapPin size={22} className="text-brass mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-1">Address</p>
              <p className="font-body text-base leading-relaxed">
                Tumaga-Putik Rd, Zamboanga City,
                <br />
                7000 Zamboanga del Sur, Philippines
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.25 }} className="border border-ink/10 bg-canvas-soft rounded-sm p-7">
              <Phone size={22} className="text-brass mb-4" />
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-1">Phone</p>
              <a href="tel:+639758489206" className="font-display text-xl font-bold focus-ring">
                +63 975 848 9206
              </a>
            </motion.div>

            <motion.a
              href="https://www.google.com/maps/place/Alegre+Coffee+%26+More/@6.941179,122.0869145,17z/data=!3m1!4b1!4m6!3m5!1s0x32504300465e4f27:0x1c62b84f04c74ccd!8m2!3d6.941179!4d122.0894894"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-sm bg-rust text-canvas-soft font-mono text-sm uppercase tracking-wide px-6 py-3.5"
            >
              Open in Google Maps
            </motion.a>
          </Reveal>

          <Reveal direction="right" delay={0.12} className="min-h-[320px] rounded-sm overflow-hidden border border-ink/10">
            <iframe
              title="Alegre Coffee & More location map"
              src="https://www.google.com/maps?q=6.941179,122.0894894&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
