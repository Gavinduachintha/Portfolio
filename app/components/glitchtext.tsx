import type { ReactNode, ElementType, CSSProperties } from "react";
import "./glitchtext.css";
import { ACCENT } from "../lib/theme";

interface GlitchTextProps {
  children: ReactNode;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
  as?: ElementType;
}

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  as: Component = "span",
}: GlitchTextProps) => {
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-3px 0 #111111" : "none",
    "--before-shadow": enableShadows ? `3px 0 ${ACCENT}` : "none",
  } as CSSProperties;

  const hoverClass = enableOnHover ? "glitch-hover" : "glitch-active";

  return (
    <Component
      className={`glitch-container ${hoverClass} ${className}`}
      data-text={children}
      style={inlineStyles}
    >
      {children}
    </Component>
  );
};

export default GlitchText;
