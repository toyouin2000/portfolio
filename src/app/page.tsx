import PortfolioLayout from "@/components/layout/portfolio-layout";
import Header from "@/components/layout/header";
import Sidebar from "@/components/sidebar/sidebar";
import ContentShell from "@/components/content/content-shell";

export default function Home() {
  return (
    <PortfolioLayout>
      <div
        className="
          h-full

          p-[clamp(12px,1vw,20px)]

          flex
          flex-col
        "
      >
        {/* Header */}
        <Header />

        {/* Main Body */}
        <div
          className="
            flex-1

            flex
            flex-col
            lg:flex-row

            gap-[clamp(12px,1vw,20px)]

            pt-[clamp(12px,1vw,20px)]

            min-h-0
          "
        >
          {/* Sidebar */}
          <Sidebar />

          {/* Content Area */}
          <main
            className="
              flex-1

              min-h-0

              rounded-[clamp(16px,1vw,24px)]

              border
              border-border

              bg-card

              text-foreground

              transition-colors
              duration-300
            "
          >
            <ContentShell />
          </main>
        </div>
      </div>
    </PortfolioLayout>
  );
}