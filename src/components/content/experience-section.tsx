import { Briefcase } from "lucide-react";

import { experiences } from "@/data/personal";
import TimelineCard from "./timeline-card";

export default function ExperienceSection() {
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
        <Briefcase className="h-5 w-5" />

        <h3 className="font-semibold">
          Corporate Exposure
        </h3>
      </div>

      <div className="space-y-8">
        {experiences.map((item, index) => (
            <TimelineCard
                key={item.company}
                title={item.company}
                role={item.role}
                duration={item.duration}
                isLast={
                index === experiences.length - 1
                }
            />
        ))}
      </div>
    </section>
  );
}