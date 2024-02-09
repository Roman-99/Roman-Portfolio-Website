import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />

      <div className="position-absolute w-50" style={{ zIndex: -1 }}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF6600"
            d="M66.9,-37.8C76.3,-22.4,66.3,5,51.9,28.4C37.5,51.8,18.8,71.1,-2.8,72.7C-24.3,74.3,-48.7,58.2,-58.8,37.3C-69,16.4,-65,-9.4,-52.8,-26.5C-40.6,-43.5,-20.3,-51.9,4.2,-54.3C28.8,-56.8,57.5,-53.3,66.9,-37.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
