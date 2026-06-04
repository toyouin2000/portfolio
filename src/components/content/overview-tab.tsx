import ProjectsSection from "./projects-section";
import SkillsSection from "./skills-section";

export default function OverviewTab() {
  return (
    <div
      className="
        space-y-[clamp(10px,.5vw,40px)]
      "
    >
      <ProjectsSection />

      <SkillsSection />
    </div>
  );
}