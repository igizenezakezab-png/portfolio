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

        <div style={styles.card}>
          <h2 style={styles.projectTitle}>🚗 Parking Management System</h2>
          <p style={styles.desc}>
            A system that manages vehicle parking.
          </p>

          <button
            onClick={() => openProject("https://parking-topaz.vercel.app/")}
          >
            Parking Management System
          </button>
        </div>

        <div style={styles.card}>
          <h2 style={styles.projectTitle}>✅ Todo App</h2>

          <p style={styles.desc}>
            A simple task manager app.
          </p>

          <button
            style={styles.button}
            onClick={() => openProject("https://todo-app-xntu.vercel.app/")}
          >
            TODO APP
          </button>
        </div>

      </div>
    </div>
  );
}

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
    marginBottom: "40px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  },
  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "left"
  },
  projectTitle: {
    color: "#38bdf8"
  },
  desc: {
    color: "#cbd5e1"
  },
  button: {
    padding: "10px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};