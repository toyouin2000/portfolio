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
                rounded-[24px]

                border
                border-border

                bg-card

                p-4
              "
            >
              <Icon className="mb-4 h-8 w-8 text-violet-500" />

              <div
                className="
                  text-2xl
                  font-bold
                "
              >
                {item.value}
              </div>

              <div className="mt-2 font-medium">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}