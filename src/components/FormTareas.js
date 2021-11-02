import React, { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  const [tareaIndividual, setTareaIndividual] = useState("");
  const [tarea, setTarea] = useState([]);

  const saveTask = (e) => {
    e.preventDefault();

    let arrayTarea = tarea;
    arrayTarea.push(tareaIndividual);
    setTarea(arrayTarea);
    setTareaIndividual("");
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
        <ListaTareas tarea={tarea}/>
      </section>
    </div>
  );
};

export default FormTareas;
