import { Link } from "react-router-dom";
import "./Home.css";
import Asub from "./components/Asub";

function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        
          <Asub />
        
        <div><Link to="/about">About</Link> | <Link to="/portfolio">Portfolio</Link> | <Link to="/contact">Contact</Link></div>
        <button className="border rounded-full border-gray-700 h-8 w-20 animate-pulse hover:bg-slate-400 hover:text-slate-900">R&eacute;sum&eacute;</button>
      </div>
    </>
  );
}

export default Home;
