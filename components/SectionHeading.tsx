type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  center?: boolean;
};

export function SectionHeading({ eyebrow, title, center = false }: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#A98F78]">{eyebrow}</p>
      <h2 className="font-serif-display text-4xl font-semibold leading-tight text-[#3F332C] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
