import React, { useEffect, useState } from "react";
import { randomBgColor } from "../App";
import "../css/glitch-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const GlitchCard = () => {
  const [change, setChange] = useState(0);
  useEffect(() => {
    const card = document.querySelector(".glitch-card-container");
    setTimeout(() => {
      setChange(glitchCard(card));
    }, change);
  }, [change]);

  return (
    <div className="glitch-card-container">
      <div className="Proyecto-icon">
        <FontAwesomeIcon icon={faComputer} />
      </div>
      <div className="Proyecto-titulo">
        Glitch Text Effect
        <div className="Proyecto-titulo-glitch1">Glitch Text Effect</div>
        <div className="Proyecto-titulo-glitch2">Glitch Text Effect</div>
        <div className="Proyecto-titulo-glitch3">Glitch Text Effect</div>
      </div>
    </div>
  );
};

function glitchCard(card) {
  const delay = Math.floor(Math.random() * 3000 + 2000);
  const color = randomBgColor();
  const originalColor = card.style.background;
  const titulo1 = document.querySelector(".Proyecto-titulo-glitch1");
  const titulo2 = document.querySelector(".Proyecto-titulo-glitch2");
  const titulo3 = document.querySelector(".Proyecto-titulo-glitch3");
  //console.log(card);
  setTimeout(() => {
    card.style.background = `#${color}`;
    let px1 = Math.random() * 20 + 20;
    let offset1 = Math.floor(Math.random() * 2) - 1;
    let offset2 = Math.floor(Math.random() * 2) - 1;
    let offset3 = Math.floor(Math.random() * 2) - 1;
    let offset4 = Math.floor(Math.random() * 2) - 1;

    card.style.transform = `translate(${px1 * offset1}px,${px1 * offset2}px)`;
    titulo1.style.transform = `translate(${-px1 * offset1}px,${
      px1 * offset2
    }px)`;
    titulo2.style.transform = `translate(${px1 * offset1}px,${
      -px1 * offset2
    }px)`;
    titulo3.style.transform = `translate(${-px1 * offset1}px,${
      -px1 * offset2
    }px)`;
    setTimeout(() => {
      card.style.transform = `translate(${px1 * offset3}px,${px1 * offset4}px)`;
      card.style.background = originalColor;
      titulo1.style.transform = `translate(${px1 * offset1}px,${
        -px1 * offset2
      }px)`;
      titulo2.style.transform = `translate(${-px1 * offset1}px,${
        -px1 * offset2
      }px)`;
      titulo3.style.transform = `translate(${px1 * offset1}px,${
        px1 * offset2
      }px)`;
      setTimeout(() => {
        titulo1.style.transform = `translate(0px,0px)`;
        titulo2.style.transform = `translate(0px,0px)`;
        titulo3.style.transform = `translate(0px,0px)`;
        card.style.transform = `translate(${0}px,${0}px)`;
        card.style.background = `#${color}`;
      }, 100);
    }, 100);
  }, 100);
  card.style.background = `#${color}`;
  //console.log("change: ", color);
  return delay;
}

export default GlitchCard;
