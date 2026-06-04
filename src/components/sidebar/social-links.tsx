"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profile } from "@/data/profile";

const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: profile.socials.linkedin,
    glow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.25)]",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: profile.socials.github,
    glow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]",
  },
  {
    icon: MdEmail,
    label: "Email",
    href: profile.socials.email,
    glow: "hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
  },
];

export default function SocialLinks() {
  return (
    <div
      className="
        
        grid
        grid-cols-3 
        gap-[clamp(.5rem,1vw,1rem)] 

      "
    >
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="group"
          >
            <div
              className={`  
                aspect-[3/2.5]

                rounded-[clamp(12px,1vw,18px)]

                border
                border-border

                bg-card
                backdrop-blur-sm

                flex
                flex-col
                items-center
                justify-center

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-violet-500/50
 
                ${item.glow}
              `}
            >
              <Icon
                className="
                  h-[clamp(18px,1.6vw,28px)]
                  w-[clamp(18px,1.6vw,28px)]

                  text-foreground

                  transition-colors
                  duration-300
                "
              />

              <span
                className="
                  mt-[clamp(4px,.5vh,8px)]

                  text-[clamp(.65rem,.75vw,.85rem)]

                  text-muted

                  transition-colors
                  duration-300

                  group-hover:text-foreground
                "
              >
                {item.label}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}