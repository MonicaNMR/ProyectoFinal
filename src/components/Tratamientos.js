import React, {useState} from 'react';
import {sellador,limpieza,resinas,endodoncia,extraccion} from './const'
import Tratamiento from './Tratamiento';

const Tratamientos = () => {
    const[tratamientos,setTratamientos] = useState([
            {
                imagen : limpieza,
                titulo : "Limpieza Dental",
                descripcion :"Eliminación de placa dental y cálculo, con cepillos rotatorios, para dejar una superficie dental limpia y encías sanas."   
            },
            {
                imagen :  resinas,
                titulo : "Resinas",
                descripcion : "Material estético (color y textura similares al diente) con el cual se restauran dientes con daños cómo, caries, fracturas, grietas o desgastes."   
            },
            {
                imagen : sellador,
                titulo : "Sellador",
                descripcion : "Método para aislar de elementos nocivos (físicos o químicos) a las fosetas y fisuras del diente, utilizando resina sellante"   
            },
            {
                imagen : endodoncia,
                titulo : "Endodoncia",
                descripcion : "Es la remoción química y mecánica de la pulpa dental, que es la parte interna del diente la cual incluye vasos sanguíneos y nervios, con el fin de eliminar infecciones y/o dolor."   
            },
            {
                imagen : extraccion,
                titulo : "Extracción Simple",
                descripcion : "Procedimiento para eliminar un diente o raíz de la encía, con el fin de evitar focos infecciosos, o para evitar malas posiciones del resto de los dientes"   
            } 
        
    ]);
    return(
        <div className='tratamientos' id='tratamientos'>            
            {tratamientos.map((tratamiento,index) => {
                return (
                    <Tratamiento 
                        key = {index}
                        imagen = {tratamiento.imagen}
                        titulo = {tratamiento.titulo}
                        descripcion = {tratamiento.descripcion}   
                    />
                );
            })}

        </div> 
    );
}

export default Tratamientos;