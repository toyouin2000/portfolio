"use client";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

import { Project } from "@/data/projects";

import GameStandingsCaseStudy from "./gamestandings-case-study";
 
interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetails({
  project,
  onBack,
}: ProjectDetailsProps) {
  
const renderCaseStudy = () => {
  switch (project.slug) {
    case "gamestandings":
      return <GameStandingsCaseStudy />;  

    default:
      return (
        <div
          className="
            py-20
            text-center
            text-muted
          "
        >
          Case study coming soon.
        </div>
      );
  }
};
  return (
    <div
      className="
        h-full
        overflow-auto

        animate-in
        fade-in

        duration-300
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between

          gap-4

          border-b
          border-border

          px-[clamp(16px,1vw,28px)]
          py-3
        "
      >
        {/* Left */}
        <div
          className="
            flex
            items-center

            gap-4

            min-w-0
          "
        >
          <button
            onClick={onBack}
            aria-label="Back"
            className="
              flex

              h-11
              w-11

              shrink-0

              items-center
              justify-center

              rounded-full

              border
              border-border

              bg-card

              transition-all
              duration-300

              hover:border-violet-500/40
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <h1
            className="
              truncate

              font-semibold

              text-foreground

              text-[clamp(1.2rem,1.2vw,2rem)]
            "
          >
            {project.title}
          </h1>
        </div>

        {/* Right */}
        {1 ? (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      shrink-0
      items-center
      gap-2
      rounded-2xl
      border
      border-violet-500/30
      px-4
      py-2.5
      font-medium
      text-violet-400
      transition-all
      duration-300
      hover:bg-violet-500/10
      hover:border-violet-500/50
    "
  >
    View
  </a>
) : ( <div></div>
)}     
 </div>

      {/* Project Content */}
      <div
        className="
          px-[clamp(16px,1vw,28px)]
          py-6
        "
      >
         
        {renderCaseStudy()}
            
      </div>
    </div>
  );
}