import React, { useEffect, useState } from "react";
import "../css/loading-card.css";

const LoadingCard = () => {
  const [activeDot, setActiveDot] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    if (isHovering) {
      setTimeout(() => {
        let dot = document.querySelector(`.dot${(activeDot % 8) + 1}`);
        let previousDot = document.querySelector(
          `.dot${((activeDot - 1) % 8) + 1}`
        );
        dot.style.opacity = 1;
        previousDot.style.opacity = 0.5;
        setActiveDot(activeDot + 1);
      }, 80);
    }
  }, [activeDot, isHovering]);
  return (
    <div
      className="loading-card-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div>Loading Wheel</div>
      <div className="loading-wheel">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
        <div className="dot5"></div>
        <div className="dot6"></div>
        <div className="dot7"></div>
        <div className="dot8"></div>
      </div>
    </div>
  );
};

export default LoadingCard;
