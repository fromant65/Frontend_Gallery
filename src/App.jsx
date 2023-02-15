import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/Logo";

const cardX = 200;
const cardY = 324;
const sizeFactor = 2;

const root = document.getElementById("root");
root.style.width = `${window.innerWidth * sizeFactor}px`;
root.style.height = `${window.innerHeight * sizeFactor}px`;
const mouseMoveHandle = (e) => {
  const x = e.clientX;
  const y = e.clientY;
  //console.log(x, y);
  const xDecimal = x / window.innerWidth;
  const yDecimal = y / window.innerHeight;
  const panX = (root.offsetWidth - window.innerWidth) * xDecimal;
  const panY = (root.offsetHeight - window.innerHeight) * yDecimal;
  root.style.transform = `translate(${-panX}px, ${-panY}px)`;
};

document.addEventListener("mousemove", mouseMoveHandle);

function App() {
  /**
   * Estructura
   * #root: Div principal
   * .App: Contenedor de proyectos
   * .Proyecto: Proyectos
   */

  useEffect(() => {
    const occupied = [];
    const proyectos = document.querySelectorAll(".Proyecto");
    proyectos.forEach((div) => {
      //console.log(occupied);
      let left, top, background;
      let isOverlapping = true;

      while (isOverlapping) {
        left = Math.floor(
          100 + (window.innerWidth * sizeFactor - cardX - 200) * Math.random()
        );
        top = Math.floor(
          100 + (window.innerHeight * sizeFactor - cardY - 200) * Math.random()
        );
        //console.log(left, top);
        let isOverlappingSomewhere = false;
        for (let i in occupied) {
          if (
            !(
              occupied[i][0] < left - cardX ||
              occupied[i][0] > left + cardX ||
              occupied[i][1] < top - cardY ||
              occupied[i][1] > top + cardY
            )
          ) {
            isOverlappingSomewhere = true;
            /*console.log(
              `Overlapping: 
              ${left}, ${top} -> 
              ${occupied[i][0]}, ${occupied[i][1]}
              `
            );*/
            //console.log(div);
          }
        }
        isOverlapping = isOverlappingSomewhere;
      }
      background = Math.floor(Math.random() * 16 ** 6).toString(16);
      //console.log([left, top, background]);
      occupied.push([left, top]);
      //div.innerHTML = `${left}, ${top}`;
      div.style.left = `${left}px`;
      div.style.top = `${top}px`;
      div.style.width = `${cardX}px`;
      div.style.height = `${cardY}px`;
      div.style.background = `#${background}`;
    });
  }, []);

  return (
    <div className="App">
      <div className="Proyecto" id="glitch_effect">
        <h1 className="Proyecto__titulo">Glich Text Effect</h1>
        <div className="Proyecto__abrir">
          <button
            className="Proyecto__abrir__open_triangle"
            onClick={(e) => {
              const proyecto = document.querySelector(".Proyecto__glitch");
              console.log(proyecto);
              root.style.position = "relative";
              root.style.top = 0;
              root.style.left = 0;
              root.style.padding = 0;
              root.style.margin = 0;
              root.style.transform = `translate(0px, 0px)`;
              //root.style.background = "#222222";
              proyecto.classList.add("active");
              proyecto.style.opacity = 1;
              proyecto.style.position = "fixed";
              proyecto.style.display = "block";
              proyecto.style.left = 0;
              proyecto.style.top = 0;
              proyecto.style.color = "#25ff25";
              proyecto.style.background = "#000";
              proyecto.style.width = "100vw";
              proyecto.style.height = "100vh";
              root.style.width = `${window.innerWidth}px`;
              root.style.height = `${window.innerHeight}px`;
              document.removeEventListener("mousemove", mouseMoveHandle);
            }}
          ></button>
        </div>
        <div className="Proyecto__glitch">
          <Logo></Logo>
        </div>
      </div>

      <div className="Proyecto">2</div>
      <div className="Proyecto">3</div>
      <div className="Proyecto">4</div>
      <div className="Proyecto">5</div>
      <div className="Proyecto">6</div>
      <div className="Proyecto">7</div>
      <div className="Proyecto">8</div>
      <div className="Proyecto">9</div>
    </div>
  );
}

export default App;
