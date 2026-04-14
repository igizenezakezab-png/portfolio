import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    whatsapp_number: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(form);

    setForm({
      name: "",
      email: "",
      phone_number: "",
      whatsapp_number: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Me</h1>

      <div style={styles.grid}>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            name="whatsapp_number"
            placeholder="WhatsApp Number"
            value={form.whatsapp_number}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>

        {/* SOCIAL MEDIA */}
        <div style={styles.infoBox}>
          <h2>My Social Media</h2>

          <p>
            <FaFacebook color="#1877F2" /> Facebook:keza belyse
            <a
              href="https://www.facebook.com/keza.belyse"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              keza belyse
            </a>
          </p>

          <p>
            <FaFacebookMessenger color="#00B2FF" /> Messenger: keza belyse
          </p>

          <p>
            <FaInstagram color="#E1306C" /> Instagram: keza_b🏀
            <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
            ></a>
          </p>

          <p>
            <FaEnvelope /> Email: youremail@gmail.com
          </p>
        </div>

      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    padding: "40px",
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
  },

  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  infoBox: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    lineHeight: "2",
  },

  link: {
    color: "#38bdf8",
    textDecoration: "none",
  },
};