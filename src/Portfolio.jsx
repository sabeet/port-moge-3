import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Portfolio.css";
import GridItem from "./GridItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faMagnifyingGlass,
  faGlobe,
  faKeyboard,
  faLayerGroup,
  faSquare,
  faArrowUpFromWaterPump,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faUnity } from "@fortawesome/free-brands-svg-icons";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import transition from "./transition"; //errror with this

function Portfolio() {
  const size = "2xl";
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  return (
    <>
      <div className="SuperCoolBox flex flex-col gap-12 h-screen">
        <div className="header h-24 text-center">
          <b>Portfolio</b>
          <br />
          2017 - {currentYear}
        </div>
        <div className="grid justify-center mx-auto w-fit gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center ">
          <Link to="/tableau">
            <GridItem text="Tableau">
              <FontAwesomeIcon icon={faMagnifyingGlass} size={size} />
            </GridItem>
          </Link>
          <a href="https://github.com/sabeet/SQL-Portfolio" target="_blank">
            <GridItem text="SQL">
              <FontAwesomeIcon icon={faDatabase} size={size} />
            </GridItem>
          </a>
          <Link to="/react">
            <GridItem text="React">
              <FontAwesomeIcon icon={faReact} size={size} />
            </GridItem>
          </Link>
          <Link to="/fullstack">
            <GridItem text="Fullstack">
              <FontAwesomeIcon icon={faLayerGroup} size={size} />
            </GridItem>
          </Link>
          <Link to="/etl">
            <GridItem text="ETL">
              <FontAwesomeIcon icon={faArrowUpFromWaterPump} size={size} />
            </GridItem>
          </Link>
          <Link to="/blog">
            <GridItem text="Blog">
              <FontAwesomeIcon icon={faKeyboard} size={size} />
            </GridItem>
          </Link>
          <Link to="/matterjs">
            <GridItem text="MatterJS">
              <FontAwesomeIcon icon={faSquare} size={size} />
            </GridItem>
          </Link>
          <Link to="/unity">
            <GridItem text="Unity">
              <FontAwesomeIcon icon={faUnity} size={size} />
            </GridItem>
          </Link>
          <Link to="/threejs">
            <GridItem text="ThreeJS">
              <FontAwesomeIcon icon={faGlobe} size={size} />
            </GridItem>
          </Link>
        </div>
        <div className="footer w-full h-48"></div>
      </div>
    </>
  );
}

export default transition(Portfolio); //problem with child component