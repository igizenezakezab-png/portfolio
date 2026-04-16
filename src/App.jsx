import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import Skills from "./pages/skills";
import Projects from "./pages/projects";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>KB</h2>

        {/* HAMBURGER */}
        <div
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* LINKS */}
        <div
          style={{
            ...styles.links,
            ...(menuOpen ? styles.showMenu : {}),
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    background: "#0f172a",
    color: "white",
    position: "relative",
  },

  logo: {
    fontWeight: "bold",
  },

  hamburger: {
    fontSize: "25px",
    cursor: "pointer",
    display: "none",
  },

  links: {
    display: "flex",
    gap: "20px",
  },

  showMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "0",
    background: "#1e293b",
    padding: "20px",
    width: "200px",
  },
};