import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import Asub from "./components/Asub";
import TransitionPage from "./TransitionPage";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    if (count === 6) {
      navigate("/special");
    }
  };

  return (
    <>
      <TransitionPage>
        <div className="flex flex-col h-screen w-screen items-center justify-center">
          <div onClick={handleClick}>
            <Asub />
          </div>
          <div>
            <Link to="/about">About</Link> |{" "}
            <Link to="/portfolio">Portfolio</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </div>
          <a
            href="https://github.com/sabeet/resume/blob/main/Sabeet_Chowdhury_Resume_July_2023_v2.pdf"
            className="border rounded-full border-gray-700 h-7 w-20 text-center animate-pulse align hover:bg-slate-400 hover:text-slate-900"
          >
            R&eacute;sum&eacute;
          </a>
        </div>
      </TransitionPage>
    </>
  );
}

export default Home;
