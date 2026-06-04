"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const mounted = useMounted();

  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return (
      <div className="h-6 w-[140px]" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3">
      <Sun
        className={`
          h-4
          w-4
          transition-colors
          ${!isDark ? "text-amber-500" : "text-muted"}
        `}
      />

      <span
        className={`
          text-sm
          transition-colors
          ${!isDark ? "text-foreground font-medium" : "text-muted"}
        `}
      >
        Light
      </span>

      <button
        type="button"
        aria-label="Toggle theme"
        onClick={() =>
          setTheme(isDark ? "light" : "dark")
        }
        className="
          relative

          h-6
          w-11

          rounded-full

          bg-violet-600

          transition-all
          duration-300

          hover:opacity-90
        "
      >
        <span
          className={`
            absolute
            top-1/2

            h-5
            w-5

            -translate-y-1/2

            rounded-full
            bg-white

            shadow-sm

            transition-all
            duration-300

            ${
              isDark
                ? "right-[2px]"
                : "right-[22px]"
            }
          `}
        />
      </button>

      <span
        className={`
          text-sm
          transition-colors
          ${isDark ? "text-foreground font-medium" : "text-muted"}
        `}
      >
        Dark
      </span>

      <Moon
        className={`
          h-4
          w-4
          transition-colors
          ${isDark ? "text-violet-400" : "text-muted"}
        `}
      />
    </div>
  );
}