import { useEffect, useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const LINKS = [
  { label: "The Coffee", href: "#coffee" },
  { label: "The Rack", href: "#rack" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-canvas/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
          <Coffee size={22} strokeWidth={2.25} className="text-brass" />
          Alegre
          <span className="text-brass">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring hover:text-brass transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className="hidden md:inline-flex items-center rounded-sm bg-ink text-canvas-soft font-mono text-[13px] uppercase tracking-wide px-5 py-2.5 hover:bg-rust transition-colors focus-ring"
        >
          Get Directions
        </a>

        <button
          className="md:hidden focus-ring p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-canvas border-t border-ink/10 px-5 py-6 flex flex-col gap-5 font-mono text-sm uppercase tracking-wide">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="focus-ring">
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center rounded-sm bg-ink text-canvas-soft px-5 py-2.5 focus-ring"
          >
            Get Directions
          </a>
        </div>
      )}
    </header>
  );
}
