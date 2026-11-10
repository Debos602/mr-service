type EyebrowProps = {
  children: React.ReactNode;
  /** plain: simple blue caps label. diamond: glowing diamond before the label. */
  variant?: "plain" | "diamond";
  /** Adds a diamond after the label too (centred headings). */
  both?: boolean;
  /** Adds a pinging dot before the label text. */
  ping?: boolean;
  className?: string;
};

function Diamond() {
  return (
    <span aria-hidden className="h-2 w-2 rotate-45 bg-accent shadow-glow" />
  );
}

export function Eyebrow({
  children,
  variant = "diamond",
  both = false,
  ping = false,
  className = "",
}: EyebrowProps) {
  if (variant === "plain") {
    return (
      <p
        className={`type-eyebrow mb-3 ${className}`}
      >
        {children}
      </p>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Diamond />
      <p className="type-kicker flex items-center">
        {ping && (
          <span className="relative mr-2 flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        )}
        {children}
      </p>
      {both && <Diamond />}
    </div>
  );
}
