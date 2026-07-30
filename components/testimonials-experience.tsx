"use client";

import { SiteFooter, SiteHeader, SiteMenu } from "@/components/site-chrome";
import { testimonials } from "@/components/testimonials-data";

export function TestimonialsExperience() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-[#242424]">
      <SiteHeader />
      <SiteMenu active="testimonials" />

      {/* ── Testimonials ── 380px column (mobile) / 711px (desktop), aligned with the header */}
      <div className="px-4 md:px-8">
        {/* 64px gap between the testimonials; menu→content gap matches Works & Tools */}
        <div className="mx-auto mt-[64px] flex w-full max-w-[380px] flex-col gap-16 md:mt-[128px] md:max-w-[711px]">
          {testimonials.map((item) => (
            <article
              key={item.index}
              aria-label={`Testimonial ${item.index}`}
              className="flex flex-col gap-8"
            >
              {/* 01 — index */}
              <span className="text-[16px] font-normal leading-none text-[#888888] md:text-[18px]">
                {item.index}
              </span>

              {/* Testimonial text */}
              <p className="text-[16px] font-normal leading-[26px] text-[#242424] md:text-[18px] md:leading-[28px]">
                {item.quote}
              </p>

              {/* Name */}
              <span className="text-[16px] font-normal leading-none text-[#888888] md:text-[18px]">
                {item.name}
              </span>
            </article>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
