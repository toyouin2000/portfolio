"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Eye,
} from "lucide-react";

import { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectHeader({
  project,
}: Props) {
  return (
    <>
      <header
        className="
          flex
          items-center
          justify-between

          gap-4

          pb-4
        "
      >
        <Link
          href="/"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-full

              border
              border-border

              bg-card
            "
          >
            <ArrowLeft className="h-5 w-5" />
          </div>

          <h1
            className="
              text-[clamp(1.1rem,1.2vw,1.5rem)]
              font-semibold
            "
          >
            {project.title}
          </h1>
        </Link>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2

            rounded-xl

            border
            border-violet-500/40

            px-4
            py-2

            text-violet-400

            transition-all
            duration-300

            hover:bg-violet-500/10
          "
        >
          <Eye className="h-4 w-4" />

          <span>View</span>
        </a>
      </header>

      <div
        className="
          border-b
          border-border
        "
      />
    </>
  );
}