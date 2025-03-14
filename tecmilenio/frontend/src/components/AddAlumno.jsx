
import { useState } from "react";
import "../App.css";

function AddAlumno({ onAlumnoAdded }) {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/add_alumno.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, edad }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          onAlumnoAdded();
          setNombre("");
          setEdad("");
        }
      })
      .catch((error) => console.error("Error al agregar alumno:", error));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        required
      />
      <button type="submit">Agregar Alumno</button>
    </form>
  );
}

export default AddAlumno;
