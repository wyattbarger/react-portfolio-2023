import React, { useState } from "react";
import GithubIcon from "../assets/github-icon.png";

function GithubFooterIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const nonHoverStyle = {
    filter: "invert(6%) sepia(6%) saturate(1240%) hue-rotate(202deg) brightness(101%) contrast(91%)",
  };

  const hoverStyle = {
    filter: "invert(26%) sepia(99%) saturate(1156%) hue-rotate(164deg) brightness(96%) contrast(89%)"
  };

  return (
    <a
      href="https://github.com/wyattbarger"
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={GithubIcon}
        alt="GitHub Icon"
        style={isHovered ? hoverStyle : nonHoverStyle}
        className="w-6 h-6 sm:w-9 sm:h-9 transition duration-1000"
      />
    </a>
  );
}

export default GithubFooterIcon;
