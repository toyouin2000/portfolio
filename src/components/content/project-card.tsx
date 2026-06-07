import type { LucideIcon } from "lucide-react";

type ProjectColor =
  | "violet"
  | "yellow"
  | "blue"
  | "green";

export type ProjectStatus =
  | "live"
  | "dev"
  | "paused";

interface ProjectCardProps {
  title: string;
  slug: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  color: ProjectColor;
  status: ProjectStatus;
  onClick: () => void;
}

const colorMap = {
  violet: {
    border: "border-violet-500",
    text: "text-violet-400",
    badge: "bg-violet-500/10 text-violet-400",
  },

  yellow: {
    border: "border-yellow-500",
    text: "text-yellow-400",
    badge: "bg-yellow-500/10 text-yellow-400",
  },

  blue: {
    border: "border-blue-500",
    text: "text-blue-400",
    badge: "bg-blue-500/10 text-blue-400",
  },

  green: {
    border: "border-green-500",
    text: "text-green-400",
    badge: "bg-green-500/10 text-green-400",
  },
} as const;

const statusMap = {
  live: {
    label: "Live",
    className:
      "bg-green-500/15 text-green-400 border border-green-500/20",
  },

  dev: {
    label: "Dev",
    className:
      "bg-red-500/15 text-red-400 border border-red-500/20",
  },

  paused: {
    label: "Paused",
    className:
      "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20",
  },
} as const;

export default function ProjectCard({
  title,
  description,
  tag,
  icon: Icon,
  color,
  status,
  onClick,
}: ProjectCardProps) {
  const styles = colorMap[color];
  const isClickable = status === "live";
  const statusStyles = statusMap[status];

  return (
    <button
      type="button"
      onClick={() => {
        if (isClickable) {
          onClick();
        }
      }}
    disabled={!isClickable}
      aria-label={`Open ${title}`}
      className="block h-full w-full text-left"
    >
      <div
        className="
          relative

          h-full
          min-h-[320px]

          rounded-[clamp(16px,1vw,24px)]

          border
          border-border

          bg-card

          p-[clamp(16px,6vw,24px)]

          transition-all
          duration-300

          cursor-pointer

          hover:-translate-y-1
          hover:border-violet-500/40
          hover:shadow-[0_12px_32px_rgba(139,92,246,0.15)]
        "
      >
        {/* Status */}
        <div
          className="
            absolute
            top-4
            right-2.5
          "
        >
          <span
            className={`
              rounded-full

              px-3
              py-1

              text-[11px]
              font-semibold

              transition-all
              duration-300

              ${statusStyles.className}
            `}
          >
            {statusStyles.label}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`
            mx-auto

            flex
            aspect-square

            w-[clamp(70px,5vw,90px)]

            items-center
            justify-center

            rounded-full

            border-2

            ${styles.border}
          `}
        >
          <Icon
            className={`
              h-[clamp(28px,2vw,38px)]
              w-[clamp(28px,2vw,38px)]

              ${styles.text}
            `}
          />
        </div>

        {/* Title */}
        <h3
          className="
            mt-6

            text-center

            font-semibold

            text-foreground

            text-[clamp(1rem,1vw,1.2rem)]
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4

            text-center

            leading-relaxed

            text-muted

            text-[clamp(.8rem,.8vw,.95rem)]
          "
        >
          {description}
        </p>

        {/* Category */}
        <div className="mt-5 flex justify-center">
          <span
            className={`
              rounded-full

              px-4
              py-2

              text-xs
              font-medium

              ${styles.badge}
            `}
          >
            {tag}
          </span>
        </div>
      </div>
    </button>
  );
}