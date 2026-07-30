export type HomeWorkImage = {
  src: string;
  alt: string;
};

export type HomeWork = {
  id: string;
  title: string;
  images: HomeWorkImage[];
};

/** Topics shown under the "Works" tab. Each image renders in a 1078×808 frame. */
export const homeWorks: HomeWork[] = [
  {
    id: "app",
    title: "App",
    images: [
      { src: "/home/work-app-1.png", alt: "App design — mobile dashboard" },
    ],
  },
  {
    id: "dashboard",
    title: "Dashboard",
    images: [
      {
        src: "/home/work-dashboard-1.png",
        alt: "Dashboard design — analytics overview",
      },
    ],
  },
  {
    id: "website",
    title: "Website",
    images: [
      {
        src: "/home/work-website-1.png",
        alt: "Website design — Tasker landing page",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    images: [
      { src: "/home/work-branding-1.png", alt: "Branding — Unseen AI" },
    ],
  },
];
