"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Folder,
} from "lucide-react";

import { projects, Project } from "@/data/projects";
import ProjectCard from "./project-card";

interface Props {
  onProjectClick: (
    project: Project
  ) => void;
}

export default function ProjectsSection({
  onProjectClick,
}: Props) {
  const [emblaRef, emblaApi] =
    useEmblaCarousel({
      align: "start",
      loop: false,
    });

  const [selectedIndex, setSelectedIndex] =
    useState(0);

  const [scrollSnaps, setScrollSnaps] =
    useState<number[]>([]);

  const [canScrollPrev, setCanScrollPrev] =
    useState(false);

  const [canScrollNext, setCanScrollNext] =
    useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(
      emblaApi.selectedScrollSnap()
    );

    setCanScrollPrev(
      emblaApi.canScrollPrev()
    );

    setCanScrollNext(
      emblaApi.canScrollNext()
    );
  }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return;

  //   setScrollSnaps(
  //     emblaApi.scrollSnapList()
  //   );

  //   onSelect();

  //   emblaApi.on("select", onSelect);

  //   return () => {
  //     emblaApi.off("select", onSelect);
  //   };
  // }, [emblaApi, onSelect]);

  return (
    <section>
      <div
        className="
          mb-[clamp(1px,1vw,24px)]

          flex
          items-center
          gap-3
        "
      >
        <Folder className="h-5 w-5" />

        <h2
          className="
            text-[clamp(1rem,1vw,1.4rem)]
            font-semibold
            text-foreground
          "
        >
          Projects
        </h2>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() =>
            emblaApi?.scrollPrev()
          }
          disabled={!canScrollPrev}
          aria-label="Previous Projects"
          className="
            absolute
            left-0
            top-1/2

            z-10

            -translate-y-1/2

            rounded-full

            border
            border-border

            bg-card

            p-[clamp(8px,.8vw,12px)]

            transition-all
            duration-300

            hover:scale-105
            hover:border-violet-500/40

            disabled:pointer-events-none
            disabled:opacity-40
          "
        >
          <ChevronLeft
            className="
              h-[clamp(16px,1vw,20px)]
              w-[clamp(16px,1vw,20px)]
            "
          />
        </button>

        <div
          ref={emblaRef}
          className="
            overflow-hidden

            px-[clamp(40px,4vw,56px)]
          "
        >
          <div className="flex">
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  min-w-0

                  flex-[0_0_100%]

                  md:flex-[0_0_50%]

                  xl:flex-[0_0_25%]

                  px-[clamp(6px,.5vw,10px)]
                "
              >
                <ProjectCard
                  {...project}
                  onClick={() =>
                    onProjectClick(project)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() =>
            emblaApi?.scrollNext()
          }
          disabled={!canScrollNext}
          aria-label="Next Projects"
          className="
            absolute
            right-0
            top-1/2

            z-10

            -translate-y-1/2

            rounded-full

            border
            border-border

            bg-card

            p-[clamp(8px,.8vw,12px)]

            transition-all
            duration-300

            hover:scale-105
            hover:border-violet-500/40

            disabled:pointer-events-none
            disabled:opacity-40
          "
        >
          <ChevronRight
            className="
              h-[clamp(16px,1vw,20px)]
              w-[clamp(16px,1vw,20px)]
            "
          />
        </button>
      </div>

      <div
        className="
          mt-[clamp(16px,1vw,24px)]

          flex
          justify-center
          gap-2
        "
      >
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() =>
              emblaApi?.scrollTo(index)
            }
            aria-label={`Go to slide ${
              index + 1
            }`}
            className={`
              h-2
              w-2

              rounded-full

              transition-all
              duration-300

              ${
                index === selectedIndex
                  ? "bg-violet-500 scale-110"
                  : "bg-border hover:bg-muted"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}