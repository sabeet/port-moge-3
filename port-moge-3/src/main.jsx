import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Portfolio from "./Portfolio.jsx";
import "./index.css";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Home />
    <About />
    <Contact />
    <Portfolio /> */}

    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
