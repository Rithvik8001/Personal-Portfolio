import { StaticImageData } from "next/image";
import htmlIcon from "@/assets/skills/html-icon.png";
import cssIcon from "@/assets/skills/css-icon.png";
import jsIcon from "@/assets/skills/js-icon.png";
import reactIcon from "@/assets/skills/react-icon.png";
import tailwindIcon from "@/assets/skills/tailwind-css-icon.png";
import vscodeIcon from "@/assets/skills/vs-code-icon.png";
import raycastIcon from "@/assets/skills/raycast-icon.png";
import warpIcon from "@/assets/skills/warp-icon.png";
import arcIcon from "@/assets/skills/arc-icon.png";

export type Skill = {
  name: string;
  url: string;
  icon: StaticImageData;
  description: string;
  type: "tech" | "tool";
};

export const techs: Skill[] = [
  {
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: htmlIcon,
    description: "For structuring web pages",
    type: "tech",
  },
  {
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: cssIcon,
    description: "For styling web pages",
    type: "tech",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: jsIcon,
    description: "For adding interactivity to web pages",
    type: "tech",
  },
  {
    name: "React",
    url: "https://react.dev/",
    icon: reactIcon,
    description: "For building user interfaces",
    type: "tech",
  },
  {
    name: "TailwindCSS",
    url: "https://tailwindcss.com/",
    icon: tailwindIcon,
    description: "For styling web pages quickly and efficiently",
    type: "tech",
  },
];

export const tools: Skill[] = [
  {
    name: "VS Code",
    url: "https://code.visualstudio.com/",
    icon: vscodeIcon,
    description: "For coding",
    type: "tool",
  },
  {
    name: "Raycast",
    url: "https://www.raycast.com/",
    icon: raycastIcon,
    description: "For a fast and efficient search experience",
    type: "tool",
  },
  {
    name: "Warp",
    url: "https://www.warp.dev/",
    icon: warpIcon,
    description: "For a fast and efficient terminal",
    type: "tool",
  },
  {
    name: "Arc",
    url: "https://arc.net/",
    icon: arcIcon,
    description: "For a fast and efficient browser",
    type: "tool",
  },
];
