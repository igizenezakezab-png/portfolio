import "./home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
  ];

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
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
            Passionate developer building modern web applications.
          </p>

          <div className="buttons">
            <button
              className="btn primary"
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>

            <button
              className="btn outline"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>
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