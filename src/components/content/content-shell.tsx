"use client";

import { useState } from "react";

import TabsNavigation from "./tabs-navigation";
import OverviewTab from "./overview-tab";
import PersonalTab from "./personal-tab";

import ProjectDetails from "./project-details";

import { TabId } from "@/data/tabs";
import { Project } from "@/data/projects";

export default function ContentShell() {
  const [activeTab, setActiveTab] =
    useState<TabId>("overview");

  const [
    selectedProject,
    setSelectedProject,
  ] = useState<Project | null>(null);

  // Show Project Details
  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() =>
          setSelectedProject(null)
        }
      />
    );
  }

  return (
    <div
      className="
        h-full

        px-[clamp(16px,1.5vw,28px)]
        pt-[clamp(16px,1.5vw,24px)]

        flex
        flex-col
      "
    >
      {/* Tabs */}
      <TabsNavigation
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Content */}
      <div
        className="
          flex-1

          pt-[clamp(16px,1.5vw,24px)]

          overflow-y-auto
        "
      >
        {activeTab === "overview" ? (
          <OverviewTab
            onProjectClick={
              setSelectedProject
            }
          />
        ) : (
          <PersonalTab />
        )}
      </div>
    </div>
  );
}