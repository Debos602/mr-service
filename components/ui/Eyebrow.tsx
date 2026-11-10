import { MotionDiv } from "@/components/ui/motion";

type EyebrowProps = {
  children: React.ReactNode;
  /** plain: simple blue caps label. diamond: glowing diamond before the label. */
  variant?: "plain" | "diamond";
  /** Adds a diamond after the label too (centred headings). */
  both?: boolean;
  /** Adds a pinging dot before the label text. */
  ping?: boolean;
  /** Pops the diamond(s) in (scale 0 → 1, rotate 0 → 45) after this delay, as on the reference. */
  diamondDelay?: number;
  className?: string;
};

const diamondClass = "h-2 w-2 rotate-45 bg-accent shadow-glow";

function Diamond({ delay }: { delay?: number }) {
  if (delay === undefined) return <span aria-hidden className={diamondClass} />;
  // Scale/rotate pop-in, no fade, replaying on every entry (reference config).
  return (
    <MotionDiv
      aria-hidden
      initial={{ scale: 0, rotate: 0 }}
      whileInView={{ scale: 1, rotate: 45 }}
      viewport={{ once: false }}
      transition={{ duration: 0.4, delay }}
      className={diamondClass}
    />
  );
}

export function Eyebrow({
  children,
  variant = "diamond",
  both = false,
  ping = false,
  diamondDelay,
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
      <Diamond delay={diamondDelay} />
      <p className="type-kicker flex items-center">
        {ping && (
          <span className="relative mr-2 flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        )}
        {children}
      </p>
      {both && <Diamond delay={diamondDelay} />}
    </div>
  );
}
