import {
  Bot,
  Ghost,
  Target,
  Puzzle,
  Trophy,
  Clapperboard,
  PlaneTakeoff,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProjectStatus } from "@/components/content/project-card";

export interface Project {
  title: string;
  description: string;
  tag: string;
  status: ProjectStatus;
  icon: LucideIcon;
  color: "violet" | "yellow" | "blue" | "green";
  url: string;
}

export const projects: Project[] = [
  {
    title: "GameStandings",
    description:
      "Real-time leaderboard for tracking board game standings among peers.",
    tag: "SAAS PLATFORM",
    status: "live",
    icon: Trophy,
    color: "blue",
    url: "https://boardgame-leaderboard.vercel.app/login",
  }, 
  {
    title: "AnakinWire",
    description:
      "Streamline movie planning through venue discovery, coordination, and reminders",
    tag: "AGENT",
    status: "live",
    icon: Clapperboard,
    color: "violet",
    url: "https://t.me/bmsanakinbot",
  },
  {
    title: "LocoBot",
    description:
      "Optimize your travel plans with intelligent departure alerts.",
    tag: "AGENT",
    status: "live",
    icon: PlaneTakeoff,
    color: "yellow",
    url: "https://t.me/jkionjknkbot",
  },
  
  
];