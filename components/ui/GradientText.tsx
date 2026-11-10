export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
      {children}
    </span>
  );
}
