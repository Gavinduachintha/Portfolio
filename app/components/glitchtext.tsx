import React from "react";
import "./glitchtext.css";

const GlitchText = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  as: Component = "span",
}) => {
  const inlineStyles = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-4px 0 red" : "none",
    "--before-shadow": enableShadows ? "4px 0 #4fda8e" : "none",
  };

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