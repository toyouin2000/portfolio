import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";

import { Project } from "@/data/projects";

interface Props {
  onProjectClick: (
    project: Project
  ) => void;
}

export default function OverviewContent({
  onProjectClick,
}: Props) {
  return (
    <div className="space-y-10">
      <ProjectsSection
        onProjectClick={onProjectClick}
      />

      <SkillsSection />
    </div>
  );
}