"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const tabItems = [
  { id: "works", label: "Works", href: "/" },
  { id: "tools", label: "Tools", href: "/tools" },
  { id: "testimonials", label: "Testimonials", href: "/testimonials" },
];

const thanksItems = [
  { flag: "🇮🇩", text: "Terima Kasih," },
  { flag: "🇬🇧", text: "Thank You," },
  { flag: "🇪🇸", text: "Gracias," },
  { flag: "🇫🇷", text: "Merci," },
  { flag: "🇯🇵", text: "ありがとうございます" },
];

/**
 * Inline logo/avatar that sits within the running header text. ~18.63px in Figma.
 * `flush` drops the left margin so the mark stays aligned when it wraps to the
 * start of a line (the left gap is then provided by a space before it).
 */
export function InlineMark({
  src,
  alt,
  flush = false,
}: {
  src: string;
  alt: string;
  flush?: boolean;
}) {
  return (
    <span
      className={`relative inline-block h-[19px] w-[19px] -translate-y-[2px] overflow-hidden rounded-[4px] align-middle ${
        flush ? "mr-[0.25em]" : "mx-[0.25em]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="19px"
        unoptimized
        className="object-cover object-center"
      />
    </span>
  );
}

/** Shared header: illustration → intro paragraph → CTA. Same on every page. */
export function SiteHeader() {
  return (
    <header className="px-4 pt-[213px] md:px-8 md:pt-[175px]">
      <div className="mx-auto flex w-full max-w-[380px] flex-col gap-16 md:max-w-[711px]">
        {/* 1 — Illustration */}
        <Image
          src="/home/illustration-cat.png"
          alt="Galuh working at a laptop"
          width={130}
          height={87}
          priority
          className="h-[78.3px] w-[117px] select-none md:h-[87px] md:w-[130px]"
        />

        {/* 2 — Intro paragraph */}
        <p className="max-w-[711px] text-[18px] font-normal leading-[32px] text-[#888888] md:text-[20px] md:leading-[36px]">
          My name is
          <InlineMark src="/home/avatar-galuh.png" alt="Galuh Prandika" />
          <span className="text-black">Galuh Prandika</span>, a young and
          passionate{" "}
          <span className="text-black">
            product designer and design engineer.
          </span>{" "}
          I&apos;ve previously worked with{" "}
          <span className="whitespace-nowrap md:whitespace-normal">
            <InlineMark src="/home/logo-kree8.png" alt="Kree8" flush />
            <a
              href="#"
              className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
            >
              Kree8
            </a>
          </span>
          <span className="text-black">,</span>
          <InlineMark src="/home/logo-sentience.png" alt="Sentience AI" />
          <a
            href="#"
            className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
          >
            Sentience AI
          </a>
          <span className="text-black">, and</span>
          <InlineMark src="/home/logo-unseen.png" alt="Unseen AI" />
          <a
            href="#"
            className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
          >
            Unseen AI
          </a>
          <span className="text-black">
            . Open to freelance projects and part-time opportunities. If your
            product needs better design and direction,{" "}
          </span>
          <a
            href="mailto:hello@galuhprandika.com"
            className="font-caveat text-[24px] leading-[32px] text-black underline decoration-from-font underline-offset-[3px] md:text-[26px] md:leading-[36px]"
          >
            You know who to call.
          </a>
        </p>

        {/* 3 — CTA buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=helogaluh@gmail.com&su=Let%27s%20Work%20Together%20%5BYour%20Brand%20Name%5D"
            target="_blank"
            rel="noreferrer"
            className="flex h-12 w-32 items-center justify-center rounded-[99px] bg-[#0d0d0d] text-[14px] font-medium leading-none text-white transition-transform hover:-translate-y-0.5"
          >
            Let&apos;s Chat
          </a>
        </div>
      </div>
    </header>
  );
}

/** Shared tab menu, 128px below the header (mobile) / 175px (desktop). */
export function SiteMenu({ active }: { active: string }) {
  return (
    <div className="px-4 md:px-8">
      <nav
        aria-label="Portfolio sections"
        className="mx-auto mt-[128px] w-full max-w-[380px] md:mt-[175px] md:max-w-[711px]"
      >
        <div className="flex gap-[50px]">
          {tabItems.map((item) => {
            const isActive = item.id === active;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-2 text-[16px] font-normal leading-none transition-colors md:text-[18px] ${
                  isActive
                    ? "text-[#242424] after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:rounded-full after:bg-[#242424] after:content-['']"
                    : "text-[#aaaaaa] hover:text-[#666666]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function FooterClock({ label, timeZone }: { label: string; timeZone: string }) {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span suppressHydrationWarning>
      {label} {time}
    </span>
  );
}

/** Shared footer: clocks → illustration/text/CTA → multilingual thanks. */
export function SiteFooter() {
  return (
    <footer className="px-4 pb-4 md:px-8 md:pb-[30px]">
      <div className="mx-auto w-full max-w-[380px] md:max-w-[711px]">
        {/* Local clocks — content→clock gap matches the menu→content gap (64px / 96px) */}
        <div className="mt-[64px] flex items-center justify-between font-mono text-[18px] leading-[36px] text-[#888888] md:mt-[128px]">
          <FooterClock label="JKT" timeZone="Asia/Jakarta" />
          <FooterClock label="NYC" timeZone="America/New_York" />
        </div>

        {/* Illustration → text → CTA, 128px below clocks (mobile) / 175px (desktop) */}
        <div className="mt-[128px] flex flex-col gap-16 md:mt-[175px]">
          <Image
            src="/home/illustration-cat-footer.png"
            alt="Galuh reviewing a document at a laptop"
            width={130}
            height={87}
            unoptimized
            className="h-[78.3px] w-[117px] select-none md:h-[87px] md:w-[130px]"
          />

          <div className="flex flex-col gap-[36px] text-[18px] font-normal leading-[32px] text-[#888888] md:text-[20px] md:leading-[36px]">
            <p>
              <span className="text-black">
                The tools have changed. The expectations haven&apos;t
              </span>
              . I don&apos;t use AI to replace the work. I use it to create more
              space for the work that matters.
            </p>
            <p>
              With tools like
              <InlineMark src="/home/logo-claude.png" alt="Claude" />
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
              >
                Claude
              </a>
              <span className="text-black">,</span>
              <InlineMark src="/home/logo-cursor.png" alt="Cursor" />
              <a
                href="https://cursor.com"
                target="_blank"
                rel="noreferrer"
                className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
              >
                Cursor
              </a>
              <span className="text-black">,</span>{" "}
              <span className="whitespace-nowrap md:whitespace-normal">
                <InlineMark src="/home/logo-chatgpt.png" alt="ChatGPT" flush />
                <a
                  href="https://chatgpt.com"
                  target="_blank"
                  rel="noreferrer"
                  className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
                >
                  ChatGPT
                </a>
              </span>
              <span className="text-black">,</span>
              <InlineMark src="/home/logo-midjourney.png" alt="Midjourney" />
              <a
                href="https://midjourney.com"
                target="_blank"
                rel="noreferrer"
                className="gradient-hover-link text-black underline decoration-from-font underline-offset-[3px]"
              >
                Midjourney
              </a>
              <span className="text-black">
                , and others, I can spend less time on busywork and more time
                thinking about the details, decisions, and experiences that shape
                great products.
              </span>
            </p>
            <p>
              <span className="text-black">
                Because when the tools become available to everyone, the real
                difference comes from how they&apos;re used.
              </span>{" "}
              If your product deserves thoughtful design and clear direction.
            </p>
            <p>
              <a
                href="mailto:hello@galuhprandika.com"
                className="font-caveat text-[24px] leading-[32px] text-black underline decoration-from-font underline-offset-[3px] md:text-[26px] md:leading-[36px]"
              >
                let&apos;s make it memorable.
              </a>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=helogaluh@gmail.com&su=Let%27s%20Work%20Together%20%5BYour%20Brand%20Name%5D"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-32 items-center justify-center rounded-[99px] bg-[#0d0d0d] text-[14px] font-medium leading-none text-white transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s Chat
            </a>
          </div>
        </div>

        {/* Multilingual thanks */}
        <div className="mt-[128px] flex flex-col gap-1 font-mono text-[16px] leading-[36px] text-[#888888] md:mt-[175px] md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-4 md:gap-y-2">
          {thanksItems.map((item) => (
            <span key={item.text} className="whitespace-nowrap">
              {item.flag} {item.text}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
