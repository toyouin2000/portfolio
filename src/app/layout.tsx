import type { Metadata } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ProjectProvider } from "@/context/project-context";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dishank Ojha",
  description: "AI Enabled Product Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full"
    >
      <body
        className="
          h-full
          min-h-dvh

          bg-background
          text-foreground

          antialiased

          transition-colors
          duration-300
        "
      >
        <ThemeProvider>
          <ProjectProvider>
            {children}
          </ProjectProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}