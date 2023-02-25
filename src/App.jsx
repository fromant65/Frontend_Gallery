import { useEffect, useState } from "react";
import "./App.css";
import GlitchEffect from "./pages/GlitchEffect";
import GlitchCard from "./components/GlitchCard";
import SolarSystem from "./pages/SolarSystem";
import SolarSystemCard from "./components/SolarSystemCard";
import LoadingWheel from "./pages/LoadingWheel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";

const cardX = 200;
const cardY = 324;
const sizeFactor = 2;

const root = document.getElementById("root");
root.style.width = `${window.innerWidth * sizeFactor}px`;
root.style.height = `${window.innerHeight * sizeFactor}px`;

function getTransitionCoords(e) {
  const x = e.clientX;
  const y = e.clientY;
  //console.log(x, y);
  const xDecimal = x / window.innerWidth;
  const yDecimal = y / window.innerHeight;
  const panX = (root.offsetWidth - window.innerWidth) * xDecimal;
  const panY = (root.offsetHeight - window.innerHeight) * yDecimal;
  return { panX, panY };
}

function handleMouseMove(e) {
  const project = document.querySelector(".Proyecto-pagina");
  const { panX, panY } = getTransitionCoords(e);
  root.style.transition = "all 0s ease";
  /*root.animate(
    { transform: `translate(${-panX}px, ${-panY}px)` },
    {
      duration: 0,
      fill: "forwards",
    }
  );
  */
  root.style.transform = `translate(${-panX}px, ${-panY}px)`;
  /*
  project.animate(
    { transform: `translate(${panX}px, ${panY}px)` },
    {
      duration: 0,
      fill: "forwards",
    }
  );*/
  project.style.transform = `translate(${panX}px, ${panY}px)`;
  project.style.transition = "all 0s ease";
}

function App() {
  /**
   * Estructura
   * #root: Div principal
   * .App: Contenedor de proyectos
   * .Proyecto: Proyectos
   */
  const [isPageOpen, setIsPageOpen] = useState(false);

  useEffect(() => {
    setProjectCoords();
  }, []);

  useEffect(() => {
    if (isPageOpen) {
      //console.log("open");
      document.removeEventListener("mousemove", handleMouseMove);
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        //console.log("closed");
        document.addEventListener("mousemove", handleMouseMove);
      }, 500); //Este timeout es el tiempo que tarda la página en desaparecer
    }
    window.scrollTo(0, 0); //Ajusta el scroll por si está desfasado
  }, [isPageOpen]);

  return (
    <div className="App">
      <div
        className="Proyecto"
        targetproject="glitch-effect"
        onClick={(e) => setIsPageOpen(handleOpenProject(e))}
      >
        <GlitchCard />
      </div>
      <div
        className="Proyecto solar-system-card"
        targetproject="solar-system"
        onClick={(e) => setIsPageOpen(handleOpenProject(e))}
      >
        <SolarSystemCard></SolarSystemCard>
      </div>
      <div
        className="Proyecto"
        targetproject="loading-wheel"
        onClick={(e) => setIsPageOpen(handleOpenProject(e))}
      >
        Loading Wheel
      </div>
      {/*Separador de Cards y Paginas*/}
      <div className="Proyecto-pagina" id="glitch-effect">
        <div
          className="cerrar-pagina"
          targetproject="glitch-effect"
          onClick={(e) => {
            setIsPageOpen(handleCloseProject(e));
          }}
        >
          X
        </div>
        <GlitchEffect></GlitchEffect>
      </div>
      <div className="Proyecto-pagina" id="solar-system">
        <div
          className="cerrar-pagina"
          targetproject="solar-system"
          onClick={(e) => {
            setIsPageOpen(handleCloseProject(e));
          }}
          style={{ zIndex: 200 }}
        >
          X
        </div>
        <SolarSystem></SolarSystem>
      </div>
      <div className="Proyecto-pagina" id="loading-wheel">
        <div
          className="cerrar-pagina"
          targetproject="loading-wheel"
          onClick={(e) => {
            setIsPageOpen(handleCloseProject(e));
          }}
          style={{ zIndex: 200 }}
        >
          X
        </div>
        <LoadingWheel></LoadingWheel>
      </div>
    </div>
  );
}

function setProjectCoords() {
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
        }
      }
      isOverlapping = isOverlappingSomewhere;
    }
    background = randomBgColor();
    occupied.push([left, top]);
    div.style.left = `${left}px`;
    div.style.top = `${top}px`;
    div.style.width = `${cardX}px`;
    div.style.height = `${cardY}px`;
    div.style.background = `#${background}`;
  });
}

export function randomBgColor() {
  return Math.floor(Math.random() * 16 ** 6).toString(16);
}

function handleOpenProject(e) {
  const targetproject = e.currentTarget.getAttribute("targetproject");
  //console.log(targetproject);
  const project = document.getElementById(targetproject);
  const { panX, panY } = getTransitionCoords(e);
  const windowWidth = window.innerWidth;
  project.style.transition = "all 0.5s ease-in-out";
  project.style.transform = `translate(${panX + windowWidth}px, ${panY}px)`;
  e.currentTarget.style.transition = "all 0.5s ease";
  e.currentTarget.style.height = "0px";
  return true;
}

function handleCloseProject(e) {
  const targetproject = e.target.getAttribute("targetproject");
  //console.log(targetproject);
  const project = document.getElementById(targetproject);
  const { panX, panY } = getTransitionCoords(e);
  const windowWidth = window.innerWidth;
  project.style.transition = "all 0.5s ease-in-out";
  project.style.transform = `translate(${panX - windowWidth}px, 0px)`;
  const cards = document.querySelectorAll(".Proyecto");
  cards.forEach((card) => {
    card.style.height = "324px";
  });
  return false;
}

export default App;
