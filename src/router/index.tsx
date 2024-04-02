import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Projects from '../views/Projects';
import Contact from '../views/Contact';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
