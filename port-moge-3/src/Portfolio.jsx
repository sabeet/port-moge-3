import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./components/Description";
import Tableau from "./components/Tableau";
import Page3D from "./components/Page3D";
import ETL from "./components/ETL";
import SQL from "./components/SQL";
import Frontend from "./components/Frontend";
import Fullstack from "./components/Fullstack";
import Misc from "./components/Misc";


function Portfolio() {
  const [active, setActive] = useState("Description");

  return (
    <>
      <div className="flex flex-row-reverse text-xl md:text-4xl">
        /Portfolio
        <Link to="/">
          <div className="hover:underline">Home</div>
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="w-1/3 lg:w-1/6">
          <br />
          {/* button for Fullstack */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("Fullstack")}
          >
            Fullstack
          </div>
          {/* button for Frontend */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("Frontend")}
          >
            Frontend
          </div>
          {/* button for SQL */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("SQL")}
          >
            SQL
          </div>
          {/* button for Tableau */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("Tableau")}
          >
            Tableau
          </div>
          {/* button for ETL */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("ETL")}
          >
            ETL
          </div>
          {/* button for 3D */}
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("3D")}
          >
            3D
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          {/* button for Misc. */}
          <div
            className="hover:bg-slate-300 p-1 h-8 hover:text-zinc-950"
            onClick={() => setActive("Misc")}
          >
            Misc.
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
        <div className="w-5/6 border h-screen border-gray-700">
          <div>
            {active === "Description" && <Description />}
            {active === "Fullstack" && <Fullstack />}
            {active === "Frontend" && <Frontend />}
            {active === "SQL" && <SQL />}
            {active === "ETL" && <ETL />}
            {active === "Tableau" && <Tableau />}
            {active === "3D" && <Page3D />}
            {active === "Misc" && <Misc />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
