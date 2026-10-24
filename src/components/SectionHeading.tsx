type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
  /** "onNavy" for headings on the dark navy sections. */
  tone?: "light" | "onNavy";
};

export function SectionHeading({ eyebrow, title, intro, id, tone = "light" }: SectionHeadingProps) {
  const onNavy = tone === "onNavy";
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${onNavy ? "text-gold-light" : "text-terracotta-ink"}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-3 font-display text-3xl font-bold text-balance sm:text-5xl ${onNavy ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      <div aria-hidden="true" className="greek-key mx-auto mt-5 w-36 text-gold" />
      {intro && <p className={`mt-5 text-lg leading-relaxed ${onNavy ? "text-sky-soft" : "text-slate"}`}>{intro}</p>}
    </div>
  );
}
