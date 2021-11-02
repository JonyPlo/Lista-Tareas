import React from 'react';

const Subtitulo = ({comision}) => {
  return (
    <div>
      <h2 className="text-center">
        Tareas de la comision {comision}
      </h2>
    </div>
  );
};

export default Subtitulo;