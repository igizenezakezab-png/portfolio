export default function Projects() {
  const openProject = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Projects</h1>

      <p style={styles.text}>
        These are some of the projects I built while learning React.
      </p>

      <div style={styles.grid}>

        {/* PROJECT 1 */}
        <div style={styles.card}>
          <h2 style={styles.projectTitle}>🚗 Parking Management System</h2>

          <p style={styles.desc}>
            A system that manages vehicle parking and helps organize spaces.
          </p>

          <button
            style={styles.button}
            onClick={() =>
              openProject("https://parking-topaz.vercel.app/bank account")
            }
          >
            Parking Management System
          </button>
        </div>

        {/* PROJECT 2 */}
        <div style={styles.card}>
          <h2 style={styles.projectTitle}>✅ Todo App</h2>

          <p style={styles.desc}>
            A simple task manager app built with React.
          </p>

          <button
            style={styles.button}
            onClick={() =>
              openProject("https://todo-app-xntu.vercel.app/bank account")
            }
          >
            TODO APP
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
    textAlign: "center",
  },

  title: {
    fontSize: "40px",
    marginBottom: "20px",
  },

  text: {
    maxWidth: "700px",
    margin: "0 auto",
    color: "#cbd5e1",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "left",
  },

  projectTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#38bdf8",
  },

  desc: {
    fontSize: "14px",
    color: "#cbd5e1",
    marginBottom: "15px",
  },

  button: {
    padding: "10px 15px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "black",
  },
};