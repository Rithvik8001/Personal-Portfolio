import { ReactNode, useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

type ButtonLinkProps = {
    children?: ReactNode;
    className?: string;
    href: string;
};

const ButtonLink = ({ children, href }: ButtonLinkProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <LayoutGroup>
            <motion.a
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                layout
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 overflow-hidden hover:bg-gray-200 px-4 py-1 rounded-full inline-flex w-max space-x-2 items-center border border-transparent font-mono transition-colors md:text-lg hover:text-foreground uppercase"
            >
                {isHovered && (
                    <motion.span
                        layout="position"
                        layoutId={`icon-${href}-${children}`}
                        className="inline-block"
                    >
                        <ArrowDownRight className="w-4 h-4 text-foreground" />
                    </motion.span>
                )}
                <motion.span layout="position" layoutId={`content-${href}`}>
                    {children}
                </motion.span>
                {!isHovered && (
                    <motion.span
                        layout="position"
                        layoutId={`icon-${href}-${children}`}
                        className="inline-block"
                    >
                        <ArrowDownRight className="w-4 h-4 text-foreground" />
                    </motion.span>
                )}
            </motion.a>
        </LayoutGroup>
    );
};

export default ButtonLink;
