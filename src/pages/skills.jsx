import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

export default function Skills() {
  return (
    <div style={styles.container}>
      
      {/* TITLE */}
      <h1 style={styles.title}>My Skills</h1>

      {/* INTRO TEXT */}
      <p style={styles.text}>
        I am a motivated student who has completed secondary school and built
        experience in modern web development. I work with frontend and backend
        technologies to create functional and responsive web applications. I am
        continuing to improve my skills as I prepare for university studies in
        software development.
      </p>

      {/* SKILLS GRID */}
      <div style={styles.grid}>
        
        <div style={styles.card}>
          <FaHtml5 size={40} color="#e34c26" />
          <p>HTML</p>
        </div>

        <div style={styles.card}>
          <FaCss3Alt size={40} color="#264de4" />
          <p>CSS</p>
        </div>

        <div style={styles.card}>
          <FaJs size={40} color="#f0db4f" />
          <p>JavaScript</p>
        </div>

        <div style={styles.card}>
          <FaReact size={40} color="#61DBFB" />
          <p>React</p>
        </div>

        <div style={styles.card}>
          <FaNodeJs size={40} color="#3C873A" />
          <p>Node.js</p>
        </div>

        <div style={styles.card}>
          <SiMysql size={40} color="#00758F" />
          <p>MySQL</p>
        </div>

      </div>
    </div>
  );
}

/* INLINE STYLES */
const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    color: "white",
    padding: "40px",
    textAlign: "center"
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px"
  },

  text: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "40px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto"
  },

  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    transition: "0.3s",
    cursor: "pointer"
  }
};