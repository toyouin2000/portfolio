import ProjectHeader from "@/components/projects/project-header";
import ProjectContent from "@/app/projects/project-content";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  // Remove non-serializable icon component
  const { icon, ...safeProject } = project;

  return (
    <main
      className="
        min-h-dvh

        bg-background
        text-foreground

        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto

          max-w-[1600px]

          px-[clamp(12px,2vw,32px)]
          py-[clamp(12px,2vw,24px)]
        "
      >
        <ProjectHeader
          project={safeProject}
        />

        <ProjectContent
          project={safeProject}
        />
      </div>
    </main>
  );
}