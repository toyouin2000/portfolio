"use client";

import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header
      className="
        grid
        grid-cols-[auto_1fr_auto]

        items-center

        h-[clamp(56px,7vh,72px)]

        rounded-[clamp(16px,1vw,24px)]

        border
        border-border

        bg-card

        px-[clamp(12px,1.5vw,24px)]

        backdrop-blur-sm

        transition-colors
        duration-300
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          items-center
          justify-center

          h-[clamp(36px,4vh,44px)]
          w-[clamp(36px,4vh,44px)]

          rounded-xl

          border
          border-violet-500/50

          bg-card

          font-semibold

          text-foreground

          shadow-[0_0_15px_rgba(168,85,247,0.2)]

          transition-colors
          duration-300
        "
      >
        DO
      </div>

      {/* Quote */}
      <div
        className="
          flex
          justify-center

          px-4
        "
      >
        <p
          className="
            hidden
            md:block

            text-center

            text-[clamp(.75rem,.9vw,1rem)]

            font-medium
            italic

            text-foreground/70

            tracking-wide
          "
        >
          “A good product is adopted while a great product is preferred.”
        </p>
      </div>

      {/* Theme Toggle */}
      <div className="justify-self-end">
        <ThemeToggle />
      </div>
    </header>
  );
}