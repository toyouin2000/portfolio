interface TimelineCardProps {
  title: string;
  role: string;
  duration: string;
  isLast?: boolean;
}

export default function TimelineCard({
  title,
  role,
  duration,
  isLast = false,
}: TimelineCardProps) {
  return (
    <div
      className="
        relative

        pl-8
      "
    >
      {/* Vertical Line */}
      {!isLast && (
        <div
          className="
            absolute

            left-[5px]
            top-4

            h-[calc(100%+2rem)]
            w-px

            bg-border
          "
        />
      )}

      {/* Dot */}
      <div
        className="
          absolute

          left-0
          top-2

          h-3
          w-3

          rounded-full

          bg-violet-500

          shadow-[0_0_12px_rgba(139,92,246,0.5)]
        "
      />

      {/* Content */}
      <div>
        <div
          className="
            flex
            items-start
            justify-between

            gap-4
          "
        >
          <div>
            <h4 className="font-semibold">
              {title}
            </h4>

            <p
              className="
                text-sm
                text-blue-500
              "
            >
              {role}
            </p>
          </div>

          <span
            className="
              rounded-lg

              border
              border-border

              bg-card

              px-3
              py-1

              text-xs
            "
          >
            {duration}
          </span>
        </div>
      </div>
    </div>
  );
}