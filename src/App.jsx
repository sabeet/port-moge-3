import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Portfolio from "./Portfolio";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import ETL from "./Components/ETL";
import Fullstack from "./Components/Fullstack";
import PageReact from "./Components/PageReact";
import Tableau from "./Components/Tableau";
import Three from "./Components/Three";
import { AnimatePresence } from "framer-motion";
import "./App.css"

function App() {  
    const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/etl" element={<ETL />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/react" element={<PageReact />} />
          <Route path="/tableau" element={<Tableau />} />
          <Route path="/three" element={<Three />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route exact path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
/* <Route exact path='/' element={</>} /> */
