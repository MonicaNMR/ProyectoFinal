import React from 'react'

const Tratamiento = (props) => {
  console.log(props)
  return (
        <div>            
            <h1>{props.titulo}</h1>
            <img src={props.imagen} width="150px" height="150px" />
            <p>{props.descripcion}</p>
        </div>
  );
};

export default Tratamiento;