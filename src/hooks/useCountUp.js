import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Animates a number counting up from 0 to `value` once it scrolls into view.
 */
export default function useCountUp(value, { duration = 1200, decimals = 0 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return [ref, display.toFixed(decimals)];
}
