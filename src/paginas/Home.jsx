import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Martín Riera</h1>
      <h2>Desarrollador web</h2>
      <p>Mi portfolio y experiencia:</p>

      <ul>
        <li><Link to="/projects">Mis proyectos</Link></li>
        <li><Link to="/resume">Mi experiencia</Link></li>
      </ul>
    </>
  );
}

export default Home;