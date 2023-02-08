import { useEffect, useState } from "react";
import "./App.css";

const cardX = 200;
const cardY = 324;
const sizeFactor = 2;

const root = document.getElementById("root");
root.style.width = `${window.innerWidth * sizeFactor}px`;
root.style.height = `${window.innerHeight * sizeFactor}px`;
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  const xDecimal = x / window.innerWidth;
  const yDecimal = y / window.innerHeight;
  const panX = (root.offsetWidth - window.innerWidth) * xDecimal;
  const panY = (root.offsetHeight - window.innerHeight) * yDecimal;
  root.style.transform = `translate(${-panX}px, ${-panY}px)`;
});

function App() {
  /**
   * Estructura
   * #root: Div principal
   * .App: Contenedor de proyectos
   * .Proyecto: Proyectos
   */

  useEffect(() => {});

  useEffect(() => {
    const occupied = [];
    const proyectos = document.querySelectorAll(".Proyecto");
    proyectos.forEach((div) => {
      //console.log(occupied);
      let left, top, background;
      let isOverlapping = true;
      let iteraciones = 0;

      while (isOverlapping) {
        iteraciones++;
        if (iteraciones > 10) break;
        left = Math.floor(
          100 + (window.innerWidth * sizeFactor - cardX - 100) * Math.random()
        );
        top = Math.floor(
          100 + (window.innerHeight * sizeFactor - cardY - 100) * Math.random()
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
      <div className="Proyecto">1</div>
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
