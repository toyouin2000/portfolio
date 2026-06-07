"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import type { Project } from "@/data/projects";

interface ProjectContextType {
  selectedProject: Project | null;

  setSelectedProject: (
    project: Project | null
  ) => void;
}

const ProjectContext =
  createContext<ProjectContextType | null>(
    null
  );

export function ProjectProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    selectedProject,
    setSelectedProject,
  ] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context =
    useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "useProject must be used within ProjectProvider"
    );
  }

  return context;
}