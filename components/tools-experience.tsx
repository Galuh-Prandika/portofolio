"use client";

import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader, SiteMenu } from "@/components/site-chrome";
import { toolSections } from "@/components/tools-data";

export function ToolsExperience() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-[#242424]">
      <SiteHeader />
      <SiteMenu active="tools" />

      {/* ── Tools ── 1078px content column, 64px below the menu (mobile) / 96px (desktop) */}
      <div className="px-4 md:px-8 lg:px-[217px]">
        <div className="mt-[64px] grid grid-cols-1 gap-8 md:mt-[128px] md:grid-cols-2">
          {toolSections.map((section, i) => (
            <Reveal key={section.title} delay={(i % 2) * 80}>
              <section aria-label={section.title}>
              <h2 className="mx-auto max-w-[380px] text-[16px] font-normal leading-none text-[#888888] md:max-w-none md:text-[18px]">
                {section.title}
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {section.tools.map((tool) => (
                  <div
                    key={tool.label}
                    className="flex items-center gap-4 rounded-[12px] bg-[#f7f7f7] px-5 py-[18px]"
                  >
                    <span className="relative size-[23.4px] shrink-0 overflow-hidden rounded-[5.2px]">
                      <Image
                        src={tool.icon}
                        alt=""
                        fill
                        sizes="24px"
                        unoptimized
                        className="object-cover object-center"
                      />
                    </span>
                    <span className="truncate text-[16px] leading-none text-black md:text-[18px]">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
