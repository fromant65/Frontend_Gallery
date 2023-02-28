import React, { useEffect, useState } from "react";
import "../css/solar-system-card.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SolarSystemCard = () => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 50; i++) {
      arr.push(i);
    }
    setStars(arr);
  }, []);
  return (
    <div
      className="solar-system-card-container"
      onMouseEnter={(e) => fallingStars(e)}
      onMouseLeave={(e) => risingStars(e)}
    >
      <div className="elipse-horizonte"></div>
      <div className="light-container"></div>
      <div className="bright-container"></div>
      {stars.map((star, index) => {
        let x = Math.floor(Math.random() * 200);
        let y = Math.floor(Math.random() * 300);
        let dimensions = Math.floor(Math.random() * 2 + 1);
        return (
          <div
            className="star"
            key={index}
            style={{
              position: "absolute",
              left: `${x}px`,
              top: `${y}px`,
              height: `${dimensions}px`,
              width: `${dimensions}px`,
              borderRadius: "50%",
              background: "#fff",
            }}
          ></div>
        );
      })}
      <div className="falling-star falling-star1">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="falling-star falling-star2">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="falling-star falling-star3">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="solar-system-card-title">Solar System Background</div>
    </div>
  );
};

function fallingStars(e) {
  let fs1 = document.querySelector(".falling-star1");
  let fs2 = document.querySelector(".falling-star2");
  let fs3 = document.querySelector(".falling-star3");
  let card = e.currentTarget;
  fs1.animate(
    [
      { transform: "translate(0px, 0px)" },
      { transform: "translate(-100px, 200px)" },
    ],
    {
      duration: 500,
      easing: "ease-in",
    }
  );
  fs2.animate(
    [
      { transform: "translate(0px, 0px)" },
      { transform: "translate(-120px, 240px)" },
    ],
    {
      duration: 500,
      easing: "ease-in",
    }
  );
  fs3.animate(
    [
      { transform: "translate(0px, 0px)" },
      { transform: "translate(-130px, 210px)" },
    ],
    {
      duration: 500,
      easing: "ease-in",
    }
  );
}

function risingStars(e) {
  let fs1 = document.querySelector(".falling-star1");
  let fs2 = document.querySelector(".falling-star2");
  let fs3 = document.querySelector(".falling-star3");
  fs1.style.transform = "translate(100px, -200px)";
  fs2.style.transform = "translate(120px, -240px)";
  fs3.style.transform = "translate(130px, -210px)";
}

export default SolarSystemCard;
