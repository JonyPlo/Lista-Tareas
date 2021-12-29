import React from "react";

const Tarea = ({ item, handleDelete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      {item}{" "}
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(item);
        }}
      >
        Borrar
      </button>
    </li>
  );
};

export default Tarea;
