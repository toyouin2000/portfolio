import JourneySection from "./journey-section";
import ImpactSection from "./impact-section";
import ExperienceSection from "./experience-section";
import SocietiesSection from "./societies-section";

export default function PersonalTab() {
  return (
    <div
      className="
        grid

        gap-[clamp(16px,2vw,24px)]

        xl:grid-cols-[1.7fr_.9fr]
      "
    >
      <div className="space-y-[clamp(16px,1vw,24px)]">
        <JourneySection />

        <ImpactSection />
      </div>

      <div className="space-y-[clamp(16px,1vw,24px)]">
        <ExperienceSection />

        <SocietiesSection />
      </div>
    </div>
  );
}