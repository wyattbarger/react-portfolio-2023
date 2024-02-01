import React, { useState } from "react";
import BugIcon from "../assets/bug-icon.png";

function BugReportIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const nonHoverStyle = {
    filter: "invert(6%) sepia(6%) saturate(1240%) hue-rotate(202deg) brightness(101%) contrast(91%)",
  };

  const hoverStyle = {
    filter: "invert(17%) sepia(67%) saturate(3329%) hue-rotate(346deg) brightness(94%) contrast(100%)"
  };

  return (
    <a
      href="https://github.com/wyattbarger/react-portfolio-2023/issues"
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ml-5 mr-5"
    >
      <img
        src={BugIcon}
        alt="Bug"
        style={isHovered ? hoverStyle : nonHoverStyle}
        className="w-6 h-6 sm:w-8 sm:h-8  transition duration-1000"
      />
    </a>
  );
}

export default BugReportIcon;
