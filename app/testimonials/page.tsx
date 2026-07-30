import type { Metadata } from "next";

import { TestimonialsExperience } from "@/components/testimonials-experience";

export const metadata: Metadata = {
  title: "Testimonials — Galuh Prandika",
  description: "What people say about working with Galuh Prandika.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC] text-[#242424]">
      <TestimonialsExperience />
    </main>
  );
}
