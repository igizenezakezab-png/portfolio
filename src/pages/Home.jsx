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
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="skills">Skills</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
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
