"use client";

import Image from "next/image";

import { SiteFooter, SiteHeader, SiteMenu } from "@/components/site-chrome";
import { homeWorks } from "@/components/works-data";

export function HomeExperience() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-[#242424]">
      <h1 className="sr-only">Galuh Prandika — Designer &amp; Engineer</h1>
      <SiteHeader />
      <SiteMenu active="works" />

      {/* ── Works ── 1078px content column, 64px below the menu on mobile / 96px on desktop */}
      <div className="px-4 md:px-8 lg:px-[217px]">
        <div className="mt-[64px] flex flex-col gap-6 md:mt-[128px] md:gap-16">
          {homeWorks.map((work, topicIndex) => (
            <section key={work.id} aria-label={work.title}>
              <h2 className="mx-auto max-w-[380px] text-[16px] font-normal leading-none text-[#888888] md:max-w-none md:text-[18px]">
                {work.title}
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {work.images.map((img, imgIndex) => (
                  <div
                    key={img.src}
                    className="relative aspect-[1078/808] w-full overflow-hidden bg-[#f4f4f4]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      priority={topicIndex === 0 && imgIndex === 0}
                      unoptimized
                      sizes="(max-width: 1024px) calc(100vw - 48px), 1078px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
