import { ReactNode } from "react";

export default function PortfolioLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      className="
        h-dvh

        bg-background

        p-[clamp(8px,1vw,20px)]

        // overflow-hidden

        max-lg:min-h-dvh
        max-lg:h-auto
        max-lg:overflow-visible

        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto

          h-full
          w-full

        //   overflow-hidden

          rounded-[clamp(16px,1.5vw,32px)]

          bg-background
          text-foreground

          transition-colors
          duration-300

          shadow-[0_0_80px_rgba(59,130,246,0.08)]

          backdrop-blur-xl

          flex
          flex-col
        "
      >
        {children}
      </div>
    </main>
  );
}