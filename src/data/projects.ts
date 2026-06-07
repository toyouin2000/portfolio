 
import {
  Bot,
  Ghost,
  Target,
  Puzzle,
  Trophy,
  Clapperboard,
  PlaneTakeoff,
  type LucideIcon,
} from "lucide-react"; 
 
import type { ProjectStatus } from "@/components/content/project-card"; 

export type ProjectIcon =
  | typeof Trophy
  | typeof Clapperboard
  | typeof PlaneTakeoff;

export interface Project {
  title: string;
  slug: string;
  description: string;
  tag: string;
  status: ProjectStatus;
 
  icon: LucideIcon;
 
  // icon: ProjectIcon;
 
  color: "violet" | "yellow" | "blue" | "green";
  url: string;
}

export const projects: Project[] = [
  {
    title: "GameStandings",
    slug: "gamestandings",
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
    slug: "anakinwire",
    description:
      "Streamline movie planning through venue discovery, coordination, and reminders.",
    tag: "AGENT",
    status: "live",
    icon: Clapperboard,
    color: "violet",
    url: "https://t.me/bmsanakinbot",
  },

  {
    title: "LocoBot",
    slug: "locobot",
    description:
      "Optimize your travel plans with intelligent departure alerts.",
    tag: "AGENT",
    status: "paused",
    icon: PlaneTakeoff,
    color: "yellow",
    url: "https://t.me/jkionjknkbot",
  },
 
  
  
];  
  