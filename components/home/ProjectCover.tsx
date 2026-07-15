import type { PlaceholderId } from "@/components/home/projectTypes";

const COVER_STYLES: Record<
  PlaceholderId,
  { gradient: string; initials: string; glow: string }
> = {
  main1: {
    gradient: "from-blue-600 via-blue-700 to-indigo-900",
    initials: "GB",
    glow: "bg-blue-400/20",
  },
  main2: {
    gradient: "from-violet-600 via-purple-700 to-fuchsia-900",
    initials: "AB",
    glow: "bg-violet-400/20",
  },
  demo1: {
    gradient: "from-amber-600 via-orange-600 to-red-800",
    initials: "SV",
    glow: "bg-amber-400/20",
  },
  demo2: {
    gradient: "from-rose-500 via-pink-600 to-purple-800",
    initials: "SE",
    glow: "bg-rose-400/20",
  },
};

type ProjectCoverProps = {
  projectId?: string;
  title: string;
};

export function ProjectCover({ projectId, title }: ProjectCoverProps) {
  const style =
    projectId && projectId in COVER_STYLES
      ? COVER_STYLES[projectId as PlaceholderId]
      : {
          gradient: "from-slate-700 via-slate-800 to-slate-900",
          initials: title.slice(0, 2).toUpperCase(),
          glow: "bg-slate-400/20",
        };

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${style.gradient}`}
    >
      <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-2xl ${style.glow}`} />
      <div className={`pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl ${style.glow}`} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <span className="relative font-heading text-4xl font-bold tracking-tight text-white/90 sm:text-5xl">
        {style.initials}
      </span>
      <span className="relative mt-2 max-w-[85%] truncate px-4 text-center font-body text-xs font-medium uppercase tracking-widest text-white/60">
        {title}
      </span>
    </div>
  );
}
