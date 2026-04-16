import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <>
      <nav style={styles.nav}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/skills">Skills</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
        <Link style={styles.link} to="/contact">Contact</Link>
      </nav>

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
    gap: "20px",
    padding: "15px",
    background: "#0f172a",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};