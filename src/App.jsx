import "./styles/portfolio.css";
import useScrollSpy from "./hooks/useScrollSpy.js";
import { NAV_IDS } from "./data/content.js";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Highlights from "./components/Highlights.jsx";
import Skills from "./components/Skills.jsx";
import Research from "./components/Research.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Strengths from "./components/Strengths.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  const active = useScrollSpy(NAV_IDS, "highlights");

  return (
    <div className="pf">
      <Navbar active={active} />
      <Hero />
      <Highlights />
      <Skills />
      <Research />
      <Projects />
      <Education />
      <Strengths />
      <Footer />
      <BackToTop />
    </div>
  );
}
