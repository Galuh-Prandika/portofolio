export type Tool = { label: string; icon: string };
export type ToolSection = { title: string; tools: Tool[] };

/** Four tool categories, each with six tools (2×3), matching the Figma design. */
export const toolSections: ToolSection[] = [
  {
    title: "Design",
    tools: [
      { label: "Figma", icon: "/tools/figma.png" },
      { label: "Framer", icon: "/tools/framer.png" },
      { label: "Webflow", icon: "/tools/webflow.png" },
      { label: "After Effect", icon: "/tools/after-effect.png" },
      { label: "Jitter", icon: "/tools/jitter.png" },
      { label: "Affinity", icon: "/tools/affinity.png" },
    ],
  },
  {
    title: "Artificial Intelligence",
    tools: [
      { label: "Claude", icon: "/tools/claude.png" },
      { label: "Cursor", icon: "/tools/cursor.png" },
      { label: "ChatGPT", icon: "/tools/chatgpt.png" },
      { label: "Midjourney", icon: "/tools/midjourney.png" },
      { label: "Perplexity", icon: "/tools/perplexity.png" },
      { label: "Codex", icon: "/tools/codex.png" },
    ],
  },
  {
    title: "Management + Research",
    tools: [
      { label: "Slack", icon: "/tools/slack.png" },
      { label: "Notion", icon: "/tools/notion.png" },
      { label: "Loom", icon: "/tools/loom.png" },
      { label: "Google Meet", icon: "/tools/google-meet.png" },
      { label: "Linear", icon: "/tools/linear.png" },
      { label: "Miro", icon: "/tools/miro.png" },
    ],
  },
  {
    title: "Build",
    tools: [
      { label: "Supabase", icon: "/tools/supabase.png" },
      { label: "React", icon: "/tools/react.png" },
      { label: "Next.js", icon: "/tools/nextjs.png" },
      { label: "Typescript", icon: "/tools/typescript.png" },
      { label: "Vercel", icon: "/tools/vercel.png" },
      { label: "Github", icon: "/tools/github.png" },
    ],
  },
];
