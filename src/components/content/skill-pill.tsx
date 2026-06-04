interface SkillPillProps {
  label: string;
}

export default function SkillPill({
  label,
}: SkillPillProps) {
  return (
    <div
      className="
        rounded-2xl

        border
        border-border

        bg-card

        px-[clamp(12px,.8vw,16px)]
        py-[clamp(8px,.6vw,10px)]

        text-[clamp(.72rem,.75vw,.9rem)]

        text-foreground

        transition-all
        duration-300

        hover:border-violet-500/30
        hover:-translate-y-[1px]
      "
    >
      {label}
    </div>
  );
}