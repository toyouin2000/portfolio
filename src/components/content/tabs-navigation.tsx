"use client";

import { TabId, tabs } from "@/data/tabs";

interface TabsNavigationProps {
  activeTab: TabId;
  onChange: (tab: TabId) => void;
}

export default function TabsNavigation({
  activeTab,
  onChange,
}: TabsNavigationProps) {
  return (
    <div
      className="
        border-b
        border-border

        transition-colors
        duration-300
      "
    >
      <div
        className="
          flex
          items-center

          gap-[clamp(1.25rem,2vw,2.5rem)]
        "
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="
                relative

                pb-[clamp(.5rem,1vh,4rem)]

                text-[clamp(.85rem,.9vw,1rem)]
                font-medium

                transition-all
                duration-300
              "
            >
              <span
                className={
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }
              >
                {tab.label}
              </span>

              {active && (
                <span
                  className="
                    absolute
                    bottom-0
                    left-0

                    h-[2px]
                    w-full

                    rounded-full

                    bg-violet-500
                  "
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}