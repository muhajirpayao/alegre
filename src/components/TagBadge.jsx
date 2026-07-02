export default function TagBadge({ children, className = "", tone = "brass" }) {
  const toneMap = {
    brass: "bg-brass text-canvas-soft",
    ink: "bg-ink text-canvas-soft",
    olive: "bg-olive text-canvas-soft",
    canvas: "bg-canvas-soft text-ink border border-ink/20",
  };

  return (
    <span
      className={`tag inline-flex items-center gap-2 py-2 pl-5 pr-4 font-mono text-xs tracking-wide uppercase ${toneMap[tone]} ${className}`}
    >
      <span className="tag-hole" />
      {children}
    </span>
  );
}
