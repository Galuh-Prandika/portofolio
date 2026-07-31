/**
 * Canonical base URL of the deployed site.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel (Project → Settings → Environment
 * Variables) to your real production domain — e.g. https://galuhprandika.com
 * or your https://<project>.vercel.app URL. Correct canonical/sitemap URLs are
 * important for SEO, so update the fallback below if you don't set the env var.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://helogaluh.com"
).replace(/\/+$/, "");

export const SITE_NAME = "Galuh Prandika";
export const SITE_TITLE = "Galuh Prandika - Designer & Engineer";
export const SITE_DESCRIPTION =
  "Galuh Prandika (helogaluh) is a product designer and design engineer crafting clean, thoughtful digital products across web, app, and product design.";

/** Person structured data — helps Google connect this site to the name "Galuh Prandika". */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Galuh Prandika",
  alternateName: ["Galuh", "helogaluh"],
  url: SITE_URL,
  email: "mailto:helogaluh@gmail.com",
  jobTitle: "Product Designer & Design Engineer",
  description:
    "Product designer and design engineer crafting clean, thoughtful digital products.",
  knowsAbout: [
    "Product Design",
    "Design Engineering",
    "UI/UX Design",
    "Web Design",
    "App Design",
    "Framer",
  ],
};
