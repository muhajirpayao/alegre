import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Coffee } from "lucide-react";

const STORAGE_KEY = "alegre-promo-dismissed-at";
const SHOW_AGAIN_AFTER_MS = 1000 * 60 * 60 * 24; // 1 day
const SHOW_DELAY_MS = 1200;

export default function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let dismissedAt = null;
    try {
      dismissedAt = Number(localStorage.getItem(STORAGE_KEY)) || null;
    } catch {
      // localStorage unavailable, always show
    }
    const recentlyDismissed = dismissedAt && Date.now() - dismissedAt < SHOW_AGAIN_AFTER_MS;
    if (recentlyDismissed) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      // ignore
    }
  };

  const claim = () => {
    dismiss();
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            aria-label="Close"
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="First cup discount offer"
            className="grain relative w-full max-w-sm bg-canvas-soft rounded-sm border border-ink/10 p-8 sm:p-9 shadow-2xl"
            initial={{ opacity: 0, scale: 0.88, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={dismiss}
              aria-label="Close popup"
              className="focus-ring absolute top-4 right-4 text-ink-soft hover:text-ink transition-colors"
            >
              <X size={20} />
            </button>

            <Coffee size={26} className="text-brass mb-4" strokeWidth={1.75} />

            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-2">
              First-Timer Offer
            </p>
            <h3 className="font-display text-3xl font-extrabold uppercase leading-[0.95] mb-3">
              Your First Cup
              <br />
              Is On Us
            </h3>
            <p className="font-body text-sm text-ink-soft leading-relaxed mb-6">
              Show this on your phone at the counter for a free size upgrade
              on your first drink — thrift rack browsing included, always.
            </p>

            <div className="tag inline-flex items-center gap-2 bg-ink text-canvas-soft font-mono text-sm tracking-widest pl-5 pr-4 py-2.5 mb-6">
              <span className="tag-hole" />
              ALEGRE10
            </div>

            <div className="flex flex-col gap-3">
              <motion.button
                onClick={claim}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="focus-ring rounded-sm bg-rust text-canvas-soft font-mono text-sm uppercase tracking-wide px-6 py-3.5"
              >
                Claim Discount
              </motion.button>
              <button
                onClick={dismiss}
                className="focus-ring font-mono text-xs uppercase tracking-widest text-ink-soft hover:text-ink transition-colors"
              >
                No thanks, maybe later
              </button>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft/70 mt-6">
              One per customer · Dine-in only
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
