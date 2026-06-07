import { Target } from "lucide-react";

import { impacts } from "@/data/personal";

export default function ImpactSection() {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <Target className="h-5 w-5" />

        <h3 className="font-semibold">
          Impact Delivered
        </h3>
      </div>

      <div
        className="
          grid

          gap-4

          md:grid-cols-3
        "
      >
        {impacts.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                relative

                rounded-[24px]

                border
                border-border

                bg-card

                p-4

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-violet-500/30
                hover:shadow-[0_8px_24px_rgba(139,92,246,0.12)]
              "
            >
              {/* Floating Company Card */}
              <div
                className="
                  absolute

                  left-1/2
                  top-0

                  z-20

                  -translate-x-1/2
                  -translate-y-6

                  opacity-0

                  transition-all
                  duration-300

                  pointer-events-none

                  group-hover:-translate-y-10
                  group-hover:opacity-100
                "
              >
                <div
                  className="
                    min-w-[180px]

                    rounded-2xl

                    border
                    border-violet-500/30

                    bg-card

                    px-5
                    py-3

                    text-center

                    shadow-xl
                    shadow-violet-500/10

                    backdrop-blur-sm
                  "
                >
                  <p
                    className="
                      text-xs

                      text-muted
                    "
                  >
                    Delivered at  {item.company}
                  </p>

                  <p
                    className="
                      mt-1

                      font-semibold

                      text-violet-400
                    "
                  >
                   
                  </p>
                </div>
              </div>

              {/* Main Content */}
              <Icon
                className="
                  mb-4

                  h-8
                  w-8

                  text-violet-500
                "
              />

              <div
                className="
                  text-2xl
                  font-bold
                "
              >
                {item.value}
              </div>

              <div
                className="
                  mt-2

                  font-medium
                "
              >
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}