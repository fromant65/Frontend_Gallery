import { useEffect, useState } from "react";
import "../css/orbits.css";
function SolarSystem() {
  useEffect(() => {
    const planeta1 = document.querySelector(".planeta-1");
    const planeta2 = document.querySelector(".planeta-2");
    const planeta3 = document.querySelector(".planeta-3");
    const orbitaTapada1 = document.querySelector(".orbita-tapada-1");
    const orbitaTapada2 = document.querySelector(".orbita-tapada-2");
    const orbitaTapada3 = document.querySelector(".orbita-tapada-3");

    orbitaTapada1.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 20000,
        easing: "linear",
        iterations: "Infinity",
      }
    );

    orbitaTapada2.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(-360deg)" }],
      {
        duration: 40000,
        easing: "linear",
        iterations: "Infinity",
      }
    );

    orbitaTapada3.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 60000,
        easing: "linear",
        iterations: "Infinity",
      }
    );

    planeta1.animate(
      [
        { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
        { transform: "rotate(-360deg) translateX(100px) rotate(360deg)" },
      ],
      {
        duration: 10000,
        easing: "linear",
        iterations: "Infinity",
      }
    );
    planeta2.animate(
      [
        { transform: "rotate(0deg) translateX(175px) rotate(0deg)" },
        { transform: "rotate(360deg) translateX(175px) rotate(-360deg)" },
      ],
      {
        duration: 15000,
        easing: "linear",
        iterations: "Infinity",
      }
    );

    planeta3.animate(
      [
        { transform: "rotate(0deg) translateX(250px) rotate(0deg)" },
        { transform: "rotate(-360deg) translateX(250px) rotate(360deg)" },
      ],
      {
        duration: 20000,
        easing: "linear",
        iterations: "Infinity",
      }
    );
  }, []);

  return (
    <div className="App" onMouseMove={(e) => handleMouseMovement(e)}>
      <div className="solar-system">
        {/*Div que contiene al sol y todos los planetas para posicionarlos en el centro */}
        <div className="sol">
          <div className="sol-brillo"></div>
        </div>
        <div className="orbita orbita-1">
          <div className="orbita-overlay"></div>
          <div className="planeta planeta-1">
            <div className="planeta-brillo"></div>
          </div>
          <div className="orbita-tapada-1"></div>
        </div>
        <div className="orbita orbita-2">
          <div className="orbita-overlay"></div>
          <div className="planeta planeta-2">
            <div className="planeta-brillo"></div>
          </div>
          <div className="orbita-tapada-2"></div>
        </div>

        <div className="orbita orbita-3">
          <div className="orbita-overlay"></div>
          <div className="planeta-3">
            <div className="planeta-brillo"></div>
          </div>
          <div className="orbita-tapada-3"></div>
        </div>
      </div>
    </div>
  );
}

function handleMouseMovement(e) {
  const orbita1 = document.querySelector(".orbita-1");
  const orbita2 = document.querySelector(".orbita-2");
  const orbita3 = document.querySelector(".orbita-3");
  let x = e.clientX;
  let y = e.clientY;
  let percentageX = x / window.innerWidth;
  let percentageY = y / window.innerHeight;
  orbita1.style.transform = `translate(calc(-50% + ${
    window.innerWidth * (percentageX - 0.5) * 0.01
  }px), calc(-50% + ${window.innerHeight * (percentageY - 0.5) * 0.01}px))`;
  orbita2.style.transform = `translate(calc(-50% + ${
    window.innerWidth * (percentageX - 0.5) * 0.03
  }px), calc(-50% + ${window.innerHeight * (percentageY - 0.5) * 0.03}px))`;
  orbita3.style.transform = `translate(calc(-50% + ${
    window.innerWidth * (percentageX - 0.5) * 0.06
  }px), calc(-50% + ${window.innerHeight * (percentageY - 0.5) * 0.06}px))`;
}

export default SolarSystem;
