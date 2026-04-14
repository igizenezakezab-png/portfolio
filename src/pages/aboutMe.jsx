import "./about.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-text">
          <h1>About Me</h1>

          <p className="intro">
            I'm a passionate and motivated student who recently completed
            secondary school and is preparing to begin my university journey
            in the field of technology.
          </p>

          <p>
            I gained hands-on experience by building websites and simple
            applications, which helped me discover my strong interest in
            software development.
          </p>

          <p>
            I enjoy creating modern, user-friendly websites and continuously
            improving my skills in HTML, CSS, JavaScript, React, and Node.js.
          </p>

          <p>
            I'm excited to grow, learn advanced technologies, and build
            impactful digital solutions.
          </p>

          <div className="about-buttons">
            <button className="primary">Download CV</button>
            <Link to="/contact">
              <button className="outline">Contact Me</button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">
          <div className="glow"></div>
          <img src="/bebe.png" alt="profile" />
        </div>

      </div>

      {/* HIGHLIGHTS */}
      <div className="about-cards">
        <div className="card">
          <h3>🎓 Education</h3>
          <p>Completed Secondary School, preparing for University</p>
        </div>

        <div className="card">
          <h3>💻 Projects</h3>
          <p>Built websites and applications using modern technologies</p>
        </div>

        <div className="card">
          <h3>🚀 Goals</h3>
          <p>Become a professional full-stack developer</p>
        </div>
      </div>
    </section>
  );
}