import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectContent({
  project,
}: Props) {
  return (
    <section
      className="
        py-8
      "
    >
      <div
        className="
          rounded-[24px]

          border
          border-border

          bg-card

          p-[clamp(16px,2vw,32px)]
        "
      >
        <h2
          className="
            text-2xl
            font-bold
          "
        >
          Overview
        </h2>

        <p
          className="
            mt-4

            max-w-3xl

            text-muted

            leading-relaxed
          "
        >
          {project.description}
        </p>
      </div>
    </section>
  );
}