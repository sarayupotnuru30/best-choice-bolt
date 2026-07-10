interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  accent?: string;
}

export function SectionHeading({ title, subtitle, centered = false, accent }: SectionHeadingProps) {
  const parts = accent ? title.split(accent) : [title];

  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-brand-text leading-tight">
        {accent ? (
          <>
            {parts[0]}
            <span className="text-primary">{accent}</span>
            {parts[1]}
          </>
        ) : title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-brand-muted text-sm sm:text-base">{subtitle}</p>
      )}
      <div className={`mt-3 h-1 w-12 bg-primary rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
