"use client";

import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { profile } from "@/data/profile";

export default function ResumeButton() {
  return (
    <Button
      asChild
      className="
        w-full

        h-[clamp(2.5rem,1vh,3.5rem)]

        rounded-xl

        bg-gradient-to-r
        from-blue-600
        to-violet-600

        text-white
        font-medium

        shadow-[0_0_20px_rgba(59,130,246,0.25)]

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]

        focus-visible:ring-2
        focus-visible:ring-violet-500/50
        focus-visible:ring-offset-2

        whitespace-nowrap
      "
    >
      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Resume"
        className="flex items-center justify-center gap-2"
      >
        <Eye
          className="
            h-[clamp(14px,1vw,18px)]
            w-[clamp(14px,1vw,18px)]
          "
        />

        <span className="text-[clamp(.85rem,.9vw,1rem)]">
          View Resume
        </span>
      </a>
    </Button>
  );
}