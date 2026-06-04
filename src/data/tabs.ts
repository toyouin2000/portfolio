export const tabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "experience",
    label: "Experience",
  },
] as const;

export type TabId = (typeof tabs)[number]["id"];