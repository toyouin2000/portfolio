import { Users } from "lucide-react";

import { societies } from "@/data/personal";
import TimelineCard from "./timeline-card";

export default function SocietiesSection() {
  return (
    <section
      className="
        rounded-[24px]

        border
        border-border

        bg-card

        p-[clamp(16px,1.25vw,24px)]
      "
    >
      <div className="mb-6 flex items-center gap-3">
        <Users className="h-5 w-5" />

        <h3 className="font-semibold">
          College Societies
        </h3>
      </div>

      <div className="space-y-8">
        {societies.map((item, index) => (
          <TimelineCard
            key={item.company}
            title={item.company}
            role={item.role}
            duration={item.duration}
            isLast={
                index === societies.length - 1
            }
          />
        ))}
      </div>
    </section>
  );
}