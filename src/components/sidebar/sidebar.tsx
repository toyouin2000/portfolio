import ProfileSection from "./profile-section";
import ExpertiseGrid from "./expertise-grid";
import ResumeButton from "./resume-button";
import SocialLinks from "./social-links";

export default function Sidebar() {
  return (
    <aside
      className=" 
        w-full
        flex-shrink-0
        py-50px

        lg:h-full
        lg:w-[clamp(280px,25vw,360px)]
        overflow-auto
         
        rounded-[clamp(16px,1vw,24px)]

        border
        border-border

        bg-card

        transition-colors
        duration-300
      "
    >
      <div
        className="
          flex
          h-full
          flex-col

          px-[clamp(.5rem,1vw,1.75rem)]
          py-[clamp(.75rem,1.2vh,1.5rem)]
        "
      >
        {/* Profile */}
        <ProfileSection />

        {/* Divider */}
        <div
          className="
            my-[clamp(.75rem,.5vh,1.25rem)]

            border-t
            border-border

            transition-colors
            duration-300
          "
        />

        {/* Expertise */}
        <ExpertiseGrid />

        {/* Resume */}


        {/* Flexible Spacer */}
        <div className="flex-1 min-h-[clamp(.1rem,1vh,2rem)]" />


        {/* Divider */}
        <div
          className="
            mb-[clamp(.5rem,.7vh,1.5rem)]

            border-t
            border-border

            transition-colors
            duration-300
          "
        />
        <div className="mt-[clamp(.1rems,.5vh,1.25rem)]">
          <ResumeButton />
        </div>

        {/* Flexible Spacer */}
        <div className="flex-1 min-h-[clamp(.1rem,.9vh,2rem)]" />

        {/* Social Links */}
        <SocialLinks />
      </div>
    </aside>
  );
}