import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cycles through a list of words/phrases with a vanish-up + appear-up
 * transition, each word blurring out as the next fades and slides in.
 */
export default function WordCycle({ words, interval = 2200, className = "" }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* invisible longest word reserves layout width so nothing jumps */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {words.reduce((a, b) => (b.length > a.length ? b : a))}
      </span>
    </span>
  );
}
