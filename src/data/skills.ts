import {
  Brain,
  BarChart3,
  Code2,
  Package,
} from "lucide-react";

export const skillGroups = [
  {
    title: "AI & Automation",
    icon: Brain,
    color: "text-violet-500",
    skills: [
      "Agents",
      "RAG",
      "Prompting",
      "n8n",
      "Vercel",
      "Claude",
    ],
  },

  {
    title: "Analytics",
    icon: BarChart3,
    color: "text-blue-500",
    skills: [
      "SQL",
      "Excel",
      "Python",
      "Zoho Analytics"
    ],
  },

  {
    title: "Tech",
    icon: Code2,
    color: "text-green-500",
    skills: [
      "API",
      "Webhooks",
      "React",
      "NodeJs",
      "MongoDB",
      "GitHub",
      "Postman"
    ],
  },

  {
    title: "Product",
    icon: Package,
    color: "text-orange-500",
    skills: [
      "User Research",
      "Roadmapping",
      "PRDs",
      "Metrics",
      "Jira",
      "Agile"
    ],
  },
];