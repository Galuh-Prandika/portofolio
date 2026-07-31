import type { Metadata } from "next";

import { HomeExperience } from "@/components/home-experience";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] text-[#242424]">
      <HomeExperience />
    </main>
  );
}
