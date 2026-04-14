import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "15px",
    padding: "15px",
    background: "#0f172a",
    color: "white"
  }
};
