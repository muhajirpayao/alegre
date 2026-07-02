import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-canvas-soft px-5 sm:px-8 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-10 mb-10">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
              <Coffee size={20} strokeWidth={2.25} className="text-brass-soft" />
              Alegre<span className="text-brass-soft">.</span>
            </a>
            <p className="font-body text-sm text-canvas-soft/70 mt-3 max-w-xs">
              Coffee &amp; More — Zamboanga City's 24-hour cafe and thrift
              corner.
            </p>
          </div>

          <nav className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wide">
            <a href="#coffee" className="focus-ring hover:text-brass-soft">The Coffee</a>
            <a href="#rack" className="focus-ring hover:text-brass-soft">The Rack</a>
            <a href="#menu" className="focus-ring hover:text-brass-soft">Menu</a>
            <a href="#visit" className="focus-ring hover:text-brass-soft">Visit</a>
          </nav>

          <div className="font-mono text-xs uppercase tracking-wide text-canvas-soft/70 space-y-1">
            <p>Tumaga-Putik Rd</p>
            <p>Zamboanga City, 7000</p>
            <p className="pt-2">
              <a href="tel:+639758489206" className="focus-ring hover:text-brass-soft">
                +63 975 848 9206
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-canvas-soft/15 pt-6 font-mono text-[11px] uppercase tracking-widest text-canvas-soft/50">
          © {new Date().getFullYear()} Alegre Coffee & More. Open 24 hours, every day.
        </div>
      </div>
    </footer>
  );
}
