
import { useState, useEffect } from "react";
import AddAlumno from "./AddAlumno";
import "../App.css";

function AlumnosList() {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetchAlumnos();
  }, []);

  const fetchAlumnos = () => {
    fetch("http://localhost:8000/api/alumnos.php")
      .then((response) => response.json())
      .then((data) => setAlumnos(data.data || []))
      .catch((error) => console.error("Error al obtener alumnos:", error));
  };

  return (
    <div className="container">
      <h2 className="title">Lista de Alumnos</h2>
      <AddAlumno onAlumnoAdded={fetchAlumnos} />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlumnosList;
