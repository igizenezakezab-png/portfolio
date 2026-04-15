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
import "./home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">KB</h2>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="intro">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Keza belyse</span>
          </h1>

          <h2 className="role">
            I'm a <span>{roles[index]}</span>
          </h2>

          <p className="description">
            Passionate developer building modern web applications. Explore my
            journey, projects, and skills as I grow in tech.
          </p>

          <div className="buttons">
            <button className="btn primary">View Projects</button>
            <button className="btn outline">Contact Me</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="image-wrapper">
            <div className="glow"></div>
            <img src="/bebe.png" alt="profile" />
          </div>
        </div>
      </section>
    </div>
  );
}
