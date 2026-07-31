import type { Metadata } from "next";

import { ToolsExperience } from "@/components/tools-experience";

export const metadata: Metadata = {
  description:
    "The design, AI, management, and build tools Galuh Prandika uses day to day.",
  alternates: { canonical: "/tools" },
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] text-[#242424]">
      <ToolsExperience />
    </main>
  );
}
