import { Volume2 } from "lucide-react";
import Reveal from "./Reveal";
import TagBadge from "./TagBadge";

/**
 * Background footage: Mixkit "Pouring coffee in a cup" clip, used under the
 * Mixkit Free License (free for commercial use, no attribution required).
 * Swap the <video src> for real shop footage once available.
 */
export default function VideoFeature() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://assets.mixkit.co/videos/43941/43941-720.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 py-24 sm:py-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal direction="left">
            <TagBadge tone="canvas" className="mb-6">Behind the Counter</TagBadge>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-[0.92] text-canvas-soft mb-6">
              Sourced Locally.
              <br />
              Served Honestly.
            </h2>
            <p className="font-body text-canvas-soft/75 leading-relaxed max-w-md">
              Every pour starts the same way, whether it's 6am or 2am: fresh
              beans, steady hands, and a rack of secondhand finds close
              enough to browse while you wait. No shortcuts, no syrupy
              gimmicks — just a cafe that also happens to sell great denim.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.12}>
            <div className="grain relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-sm overflow-hidden border border-canvas-soft/15">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://assets.mixkit.co/videos/43938/43938-720.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-ink/60 backdrop-blur px-3 py-1.5 text-canvas-soft">
                <Volume2 size={13} />
                <span className="font-mono text-[10px] uppercase tracking-widest">Muted Loop</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
