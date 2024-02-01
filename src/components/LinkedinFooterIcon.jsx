import React, { useState } from "react";
import LinkedinIcon from "../assets/linkedin-icon.png";

function LinkedinFooterIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const nonHoverStyle = {
    filter: "invert(6%) sepia(6%) saturate(1240%) hue-rotate(202deg) brightness(101%) contrast(91%)",
  };

  const hoverStyle = {
    filter: "invert(26%) sepia(99%) saturate(1156%) hue-rotate(164deg) brightness(96%) contrast(89%)"
  };

  return (
    <a
      href="https://www.linkedin.com/in/wyatt-barger/"
      target="_blank"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ml-5 mr-5"
    >
      <img
        src={LinkedinIcon}
        alt="LinkedIn"
        style={isHovered ? hoverStyle : nonHoverStyle}
        className="w-6 h-6 sm:w-8 sm:h-8 transition duration-1000"
      />
    </a>
  );
}

export default LinkedinFooterIcon;
