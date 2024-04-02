import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import NavBar from './components/NavBar';
import LavaLamp from "./components/LavaLamp";
import Router from './router';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

function App() {
  return (
    <div>
      <NavBar />
      <LavaLamp />
      <Router />
    </div>
  );
}

export default App;
