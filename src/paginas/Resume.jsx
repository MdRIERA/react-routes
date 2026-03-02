import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume";
function Resume() {
  return (
    <>
      <h1>Mis estudios y experiencia</h1>
      <p>
        <Link to="/">Volver al Home</Link>
      </p>
      <p>Estudios:</p>
      <ul>
        {studies.map((studie) => (
          <li key={studie.id} style={{ marginBottom: "24px" }}>
            {studie.title} - {studie.institution} - {studie.date}
          </li>
        ))}
      </ul>
      <p>Experiencia:</p>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id} style={{ marginBottom: "24px" }}>
            {experience.title} - {experience.company} - {experience.date}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Resume;
