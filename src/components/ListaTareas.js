import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tarea, handleDelete }) => {
  return (
    <>
      <ul className="list-group my-5">
        {tarea.map((item, id) => (
          <Tarea key={id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default ListaTareas;
