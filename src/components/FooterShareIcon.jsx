import React, { useState } from "react";
import ShareIcon from "../assets/share-icon.png";

function ShareFooterIcon() {
  const [isHovered, setIsHovered] = useState(false);

  const nonHoverStyle = {
    filter: "invert(6%) sepia(6%) saturate(1240%) hue-rotate(202deg) brightness(101%) contrast(91%)",
  };

  const hoverStyle = {
    filter: "invert(26%) sepia(99%) saturate(1156%) hue-rotate(164deg) brightness(96%) contrast(89%)"
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <button
      onClick={copyUrl}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="ml-5 mr-5"
    >
      <img
        src={ShareIcon}
        alt="Share"
        style={isHovered ? hoverStyle : nonHoverStyle}
        className="w-6 h-6 sm:w-9 sm:h-9 transition duration-1000 cursor-pointer"
      />
    </button>
  );
}

export default ShareFooterIcon;
