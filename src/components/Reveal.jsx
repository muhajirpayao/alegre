import { motion } from "framer-motion";

/**
 * Wraps children in a smooth fade + slide reveal that triggers once
 * the element scrolls into view. Mirrors the reveal-on-scroll pattern
 * used across the site for consistent, premium-feeling transitions.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  y,
  distance = 28,
  duration = 0.7,
  className = "",
  as = "div",
}) {
  const Component = motion[as] ?? motion.div;
  const offsets = {
    up: { x: 0, y: y ?? distance },
    down: { x: 0, y: y != null ? -y : -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  const { x, y: yOffset } = offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
