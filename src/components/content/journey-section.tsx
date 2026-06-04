import { Play } from "lucide-react";

import { journey } from "@/data/personal";

const colorMap = {
  violet: {
    border: "border-violet-500",
    icon: "text-violet-500",
  },

  blue: {
    border: "border-blue-500",
    icon: "text-blue-500",
  },

  cyan: {
    border: "border-cyan-500",
    icon: "text-cyan-500",
  },

  green: {
    border: "border-green-500",
    icon: "text-green-500",
  },

  orange: {
    border: "border-orange-500",
    icon: "text-orange-500",
  },
};

export default function JourneySection() {
  return (
    <section
      className="
        rounded-[24px]

        border
        border-border

        bg-card
 
      
        p-[clamp(16px,1vw,24px)]
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <Play className="h-5 w-5" />

        <h3 className="font-semibold">
          Journey
        </h3>
      </div>

      {/* Description */}
      <p
        className="
          mt-4

          text-sm
          text-muted
        "
      >
        An exploratory mindset led me to join multiple societies at IIT Guwahati, where I organized events, conducted workshops, and led teams. Alongside acads, I continuously strengthened my technical skills, helping me secure multiple internships and begin my career as a TPM. 
        <br /> 
        At Datahash, I owned a complete product end-to-end and now leverage AI tools and automation to enhance productivity and product execution.
      </p>

      {/* =========================
          Desktop Timeline
      ========================== */}
      <div
        className="
          hidden
          lg:flex

          mt-5

          items-start
          justify-center
        "
      >
        {journey.map((item, index) => {
          const Icon = item.icon;

          const colors =
            colorMap[
              item.color as keyof typeof colorMap
            ];

          return (
            <div
              key={index}
              className="
                flex
                items-start
              "
            >
              {/* Node */}
              <div
                className="
                  flex
                  flex-col
                  items-center
                  w-[77px]
                  shrink-0
                "
              >
                <div
                  className={`
                    flex

                    h-[60px]
                    w-[60px]

                    items-center
                    justify-center

                    rounded-full

                    border-2

                    ${colors.border}
                  `}
                >
                  <Icon
                    className={`
                      h-6
                      w-6

                      ${colors.icon}
                    `}
                  />
                </div>

                <span
                  className="
                    mt-3

                    text-center

                    text-sm
                    font-medium

                    text-foreground
                  "
                >
                  {item.label}
                </span>
              </div>

              {/* Connector */}
              {index !== journey.length - 1 && (
                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-[60px]
                    shrink-0

                    mt-[30px]

                    px-1
                  "
                >
                  <svg
                    width="72"
                    height="12"
                    viewBox="0 0 72 12"
                    fill="none"
                    className="text-border"
                  >
                    <path
                      d="M0 6H62"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M56 2L62 6L56 10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* =========================
          Mobile Timeline
      ========================== */}
      <div
        className="
          mt-8

          flex
          flex-col

          gap-6

          lg:hidden
        "
      >
        {journey.map((item, index) => {
          const Icon = item.icon;

          const colors =
            colorMap[
              item.color as keyof typeof colorMap
            ];

          return (
            <div
              key={index}
              className="
                flex
                flex-col
                items-center
              "
            >
              <div
                className={`
                  flex

                  h-[56px]
                  w-[56px]

                  items-center
                  justify-center

                  rounded-full

                  border-2

                  ${colors.border}
                `}
              >
                <Icon
                  className={`
                    h-5
                    w-5

                    ${colors.icon}
                  `}
                />
              </div>

              <span
                className="
                  mt-2

                  text-sm
                  font-medium

                  text-foreground
                "
              >
                {item.label}
              </span>

              {index !== journey.length - 1 && (
                <div
                  className="
                    mt-3

                    h-8
                    w-px

                    bg-border
                  "
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}