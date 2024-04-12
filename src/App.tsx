import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import NavBar from "./components/NavBar";
import LavaLamp from "./components/LavaLamp";
import Router from "./router";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <body>
      <LavaLamp />
      <NavBar />
      <Router />
    </body>
  );
}

export default App;
