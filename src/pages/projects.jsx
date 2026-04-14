export default function Projects() {
  
  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      
      <h1 style={styles.title}>My Projects</h1>

      <p style={styles.text}>
        These are some of the projects I built while learning React and full-stack
        development. They help me practice real-world problem solving.
      </p>

      <div style={styles.grid}>

        {/* PROJECT 1 */}
        <div style={styles.card}>
          <h2 style={styles.projectTitle}>🚗 Parking Management System</h2>

          <p style={styles.desc}>
            A system that manages vehicle parking. It helps track vehicles,
            manage parking spaces, and improve organization.
          </p>

          <button
            style={styles.button}
            onClick={() => openProject("http://localhost:5182/")}
          >
            View Project
          </button>
        </div>

        {/* PROJECT 2 */}
        <div style={styles.card}>
          <h2 style={styles.projectTitle}>✅ Todo App</h2>

          <p style={styles.desc}>
            A simple task manager app that allows users to add, delete, and
            organize daily tasks efficiently.
          </p>

          <button
            style={styles.button}
            onClick={() => openProject("http://localhost:5178/")}
          >
            View Project
          </button>
        </div>

      </div>
    </div>
  );
}

/* STYLES */
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
    maxWidth: "750px",
    margin: "0 auto",
    color: "#cbd5e1",
    marginBottom: "40px",
    lineHeight: "1.6"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto"
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "left"
  },

  projectTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#38bdf8"
  },

  desc: {
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: "1.6",
    marginBottom: "15px"
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#38bdf8",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold"
  }
};