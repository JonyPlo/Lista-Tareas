import React, { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tarea, setTarea] = useState(tasks);

  // useEffect
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tarea));
  }, [tarea]);

  // Aqui van las funciones
  const saveTask = (e) => {
    e.preventDefault();

    setTarea([...tarea, tareaIndividual]);
    setTareaIndividual("");
  };

  const handleDelete = (nombreTarea) => {
    let arrayTarea = tarea.filter((item) => {
      return item !== nombreTarea;
    });
    console.log(arrayTarea);
    setTarea(arrayTarea);
  };

  return (
    <div className="container">
      <form onSubmit={saveTask}>
        <div className="mb-3 d-flex">
          <input
            type="text"
            placeholder="Ingrese una tarea"
            value={tareaIndividual}
            className="form-control"
            onChange={({ target }) => setTareaIndividual(target.value)}
          />
          <button className="btn btn-outline-light ms-4" type="submit">
            Agregar
          </button>
        </div>
      </form>

      <section>
        <ListaTareas tarea={tarea} handleDelete={handleDelete} />
      </section>
    </div>
  );
};

export default FormTareas;
