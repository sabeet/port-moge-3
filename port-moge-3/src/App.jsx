import "./App.css";
import Asub from "./components/Asub";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
        
          <Asub />
        
        <div>About | Portfolio | Contact</div>
        <button className="border rounded-full border-white h-8 w-20">R&eacute;sum&eacute;</button>
      </div>
    </>
  );
}

export default App;
