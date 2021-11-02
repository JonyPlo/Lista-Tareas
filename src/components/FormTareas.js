import React from 'react';

const FormTareas = () => {
    return (
        <div>
            <form className='container'>
            <input type="text" placeholder='Ingrese una tarea' className='form-control' />
            <button className='btn btn-outline-light' type='submit'>Agregar</button>

            </form>
        </div>
    );
};

export default FormTareas;