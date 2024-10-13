import { cn } from "@/lib/utils";
import { useNavStore } from "@/zustand/store";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
  section: string;
};

const NavLink = ({ href, children, className, section }: NavLinkProps) => {
  const { activeSection } = useNavStore();

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: (document.querySelector(href) as HTMLLinkElement).offsetTop,
          behavior: "smooth",
        });
      }}
      className={cn(
        "nav-link font-medium p-2 rounded-full px-4 transition-colors border border-transparent text-tertiary hover:text-foreground hover:bg-background hover:border-gray-200",
        activeSection === section &&
          "text-foreground bg-background border-gray-200",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NavLink;
