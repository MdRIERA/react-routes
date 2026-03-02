import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <>
      <h1>Mis proyectos</h1>

      <p>
        <Link to="/">Volver al Home</Link>
      </p>

      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: "24px" }}>
            <h2>{project.name}</h2>

            <img
              src={project.image}
              alt={project.name}
              style={{ width: "250px", maxWidth: "100%", display: "block" }}
            />

            <p>{project.description}</p>

            <p>
              <a href={project.url} target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </p>

            <p>ID: {project.id}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Projects;