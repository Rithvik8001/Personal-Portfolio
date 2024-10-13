import { StaticImageData } from "next/image";

import tcs from "@/assets/experience/tcs.jpg";
import elorce from "@/assets/experience/elorce.png";

export type Experience = {
  company: string;
  companyImage: StaticImageData;
  role: string;
  from: string;
  to: string;
  descriptions: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tata Consultancy Services",
    companyImage: tcs,
    role: "Frontend Developer",
    from: "July 2021",
    to: "July 2022",
    descriptions: [
      "Built and maintained interactive web applications using React.js, focusing on delivering clean, maintainable code.",
      "Developed and integrated form validation systems to enhance user experience and prevent errors, improving overall application reliability.",
      "Improved application performance by introducing techniques like lazy loading and code splitting, resulting in faster page load times and better user engagement.",
      "Contributed to accessibility improvements by adhering to WCAG standards and ensuring semantic, SEO-friendly HTML markup.",
      "Wrote reusable components and managed state effectively to reduce redundancy and increase development efficiency.",
    ],
  },
  {
    company: "Elorce Pvt Ltd",
    companyImage: elorce,
    role: "Web Developer Intern",
    from: "Jan 2021",
    to: "Apr 2021",
    descriptions: [
      "Collaborated with senior developers to design and implement interactive UI components, improving the overall user experience of web applications.",
      "Assisted in debugging and resolving frontend issues, ensuring smooth performance and functionality across multiple browsers and devices.",
      "Worked closely with the design team to translate wireframes and mockups into fully functional, responsive web pages.",
    ],
  },
];
