import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ title, subtitle, align = "left", className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "mb-3 h-1 w-10 rounded-full bg-accent",
          align === "center" && "mx-auto"
        )}
        aria-hidden
      />
      <h2 className="font-heading text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className={cn("mt-2 max-w-2xl font-body text-text-muted", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
