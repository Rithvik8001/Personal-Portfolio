import { LayoutGroup, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavStore } from "@/zustand/store";
import { projects } from "@/constants/projects";
import ProjectCard from "./project-card";
import { easeOutExpo } from "@/constants/ease";
import ButtonLink from "../ui/button-link";

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { setActiveSection } = useNavStore();
  const isInView = useInView(projectsRef, {
    margin: "-50%",
  });
  const headingRef = useRef<HTMLHeadingElement>(null);
  const headingParagraphRef = useRef<HTMLParagraphElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const headingParagraphInView = useInView(headingParagraphRef, {
    once: true,
  });

  useEffect(() => {
    if (isInView) setActiveSection("projects");
  }, [isInView]);

  return (
    <motion.div
      ref={projectsRef}
      id="projects"
      className="px-4 pt-24 flex flex-col gap-12"
    >
      <div className="flex flex-col gap-4">
        <h1
          ref={headingRef}
          className="text-4xl font-medium py-1 tight md:text-6xl overflow-hidden"
        >
          <motion.span
            animate={{
              y: headingInView ? 0 : "100%",
              transition: {
                duration: 0.75,
                delay: 0.15,
                ease: easeOutExpo,
              },
            }}
            className="block"
          >
            Projects
          </motion.span>
        </h1>
        <motion.p
          ref={headingParagraphRef}
          animate={{
            opacity: headingParagraphInView ? 1 : 0,
            transition: {
              delay: 0.15,
            },
          }}
          className="tight text-tertiary text-lg sm:text-xl"
        >
          Here are some of the projects I've worked on!
        </motion.p>
      </div>
      <div className="flex flex-col gap-8 md:gap-12">
        <LayoutGroup>
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.title} {...project} />
          ))}
        </LayoutGroup>
      </div>
      <div className="flex justify-center">
        <ButtonLink href="https://github.com/1">
          See all of my works on GitHub!
        </ButtonLink>
      </div>
    </motion.div>
  );
};

export default Projects;
