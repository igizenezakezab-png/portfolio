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
            I'm a passionate and motivated student preparing for university in technology.
          </p>

          <p>
            I built websites and small applications which helped me love software development.
          </p>

          <p>
            I enjoy working with HTML, CSS, JavaScript, React, and Node.js.
          </p>

          <p>
            I want to become a full-stack developer and build impactful solutions.
          </p>

          {/* BUTTON GOES TO CONTACT PAGE */}
          <Link to="/contact">
            <button className="outline">
              Contact Me
            </button>
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-image">
          <img src="/bebe.png" alt="profile" />
        </div>

      </div>
    </section>
  );
}