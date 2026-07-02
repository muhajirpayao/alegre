import Reveal from "./Reveal";

const FEATURES = [
  { pair: ["Milk-Balanced.", "Never Burnt."], note: "Every espresso pulled and steamed to spec, not rushed." },
  { pair: ["Slow Brew.", "Fast Wifi."], note: "Camp out for hours — outlets and signal are never the problem." },
  { pair: ["Picked Racks.", "No Bargain Bin."], note: "Thrift pieces chosen one at a time, not dumped by the crate." },
  { pair: ["Open Late.", "Open Early."], note: "24 hours, every day — the door doesn't know a closing time." },
];

export default function FeatureGrid() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-xl mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-brass mb-3">
            Why Regulars Come Back
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase leading-[0.92]">
            Two things done properly,
            <br />
            under one roof.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 border-t border-l border-ink/10">
          {FEATURES.map((f, i) => (
            <Reveal key={f.pair.join(" ")} delay={i * 0.08} distance={18}>
              <div className="border-r border-b border-ink/10 p-8 sm:p-10 h-full">
                <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-tight mb-3">
                  {f.pair[0]} <span className="text-brass">{f.pair[1]}</span>
                </p>
                <p className="font-body text-sm text-ink-soft leading-relaxed">{f.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
