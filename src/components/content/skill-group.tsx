import SkillPill from "./skill-pill";

interface SkillGroupProps {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
  showDivider?: boolean;
}

export default function SkillGroup({
  title,
  icon: Icon,
  color,
  skills,
  showDivider,
}: SkillGroupProps) {
  return (
    <div
      className={`
        relative

        px-[clamp(12px,1vw,24px)]

        ${showDivider ? "lg:border-r lg:border-border" : ""}
      `}
    >
      <div
        className="
          mb-5

          flex
          items-center

          gap-3
        "
      >
        <Icon
          className={`
            h-7
            w-7

            ${color}
          `}
        />

        <h3
          className="
            font-semibold

            text-[clamp(1rem,.9vw,1.2rem)]
          "
        >
          {title}
        </h3>
      </div>

      <div
        className="
          flex
          flex-wrap

          gap-3
        "
      >
        {skills.map((skill) => (
          <SkillPill
            key={skill}
            label={skill}
          />
        ))}
      </div>
    </div>
  );
}