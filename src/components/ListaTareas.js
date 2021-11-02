import React from "react";
import Tarea from "./Tarea";

const ListaTareas = ({ tarea }) => {
  return (
    <>
      <ul className="list-group my-5">
        {tarea.map((item, id) => (
          <Tarea key={id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ListaTareas;
