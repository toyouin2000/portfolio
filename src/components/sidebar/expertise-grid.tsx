import {
  Rocket,
  Bot,
  BarChart3,
  Link2,
  Target,
  Users,
  Handshake,
} from "lucide-react";

const expertise = [
  {
    icon: Target,
    title: "Product Ownership",
    subtitle: "Years Exp",
    color: "border-violet-500",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.15)]",
  },
  {
    icon: Bot,
    title: "AI & Tech Proficiency",
    subtitle: "Products",
    color: "border-blue-500",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.15)]",
  },
  {
    icon: Users,
    title: "User-Centric Approach",
    subtitle: "& Analytics",
    color: "border-green-500",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.15)]",
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    subtitle: "& Integrations",
    color: "border-orange-500",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
  },
];

export default function ExpertiseGrid() {
  return (
    <div className="w-full">
      <h3
        className="
          mb-[clamp(.5rem,1.3vh,1.25rem)]
          text-[clamp(.75rem,.7vw,.95rem)]
          uppercase
          tracking-[0.15em]
          text-violet-400
        "
      >
        Key Competencies
      </h3>

      <div
        className="
          grid
          grid-cols-2
          gap-[clamp(.5rem,1vw,1rem)]
          place-items-center
        "
      >
        {expertise.map((item) => {
          const Icon = item.icon;

          return (
            <div
            key={item.title}
            className="
                flex
                flex-col
                items-center
                text-center
            "
            >
            {/* Circle */}
            <div
                className={`
                aspect-square
                w-[clamp(60px,1vw,110px)]

                rounded-full
                border

                ${item.color}

                bg-white/[0.02]

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:border-white/30
                ${item.glow}
                `}
            >
                <Icon
                className="
                    h-[clamp(18px,1.3vw,26px)]
                    w-[clamp(18px,1.3vw,26px)]
                "
                />
            </div>

            {/* Text below circle */}
            <div className="mt-[clamp(6px,.5vh,12px)]">
                <div
                className="
                    font-bold
                    leading-none

                    text-[clamp(0.5rem,.8vw,1.75rem)]
                "
                >
                {item.title}
                </div>

                {/* <div
                className="
                    mt-[2px]

                    text-slate-400
                    leading-tight

                    text-[clamp(.65rem,.75vw,.9rem)]
                "
                >
                {item.subtitle}
                </div> */}
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}