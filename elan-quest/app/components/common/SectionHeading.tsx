interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="heading-font text-2xl md:text-4xl text-[var(--foreground)]">
      {title}
    </h2>
  );
}