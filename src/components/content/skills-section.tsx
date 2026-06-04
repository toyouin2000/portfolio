import { Layers3 } from "lucide-react";

import { skillGroups } from "@/data/skills";
import SkillGroup from "./skill-group";

export default function SkillsSection() {
  return (
    <section
      className="
        mb-[clamp(28px,2vw,40px)]

        border-t
        border-border

        pt-[clamp(24px,2vw,36px)]
      "
    >
      {/* Header */}
      <div
        className="
          mb-[clamp(20px,1.5vw,28px)]

          flex
          items-center

          gap-3
        "
      >
        <Layers3 className="h-5 w-5" />

        <h2
          className="
            font-semibold

            text-[clamp(1rem,1vw,1.4rem)]
          "
        >
          Skills
        </h2>
      </div>

      <div
        className="
          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4

          gap-[clamp(16px,1vw,24px)]
        "
      >
        {skillGroups.map(
          (group, index) => (
            <SkillGroup
              key={group.title}
              {...group}
              showDivider={
                index !==
                skillGroups.length - 1
              }
            />
          )
        )}
      </div>
    </section>
  );
}