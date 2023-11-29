import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Portfolio from "./Portfolio.jsx";
import "./index.css";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <About />
    <Contact />
    {/* <Portfolio /> */}
  </React.StrictMode>
);
