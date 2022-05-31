import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {unaSonrisa,muela3,instrumental,sillondental,muela} from './const'
import Tratamientos from './Tratamientos';
import Formulario from './Formulario';



const Principal = () => {
  return (     
     <Container >       
        <Container >
         <div className="topnav" id="myTopnav">      
            <a href="#Inicio" className="active">Inicio</a>         
            <div className="dropdown">
               <button className="dropbtn">Tratamientos Dentales
                  <i className="fa fa-caret-down"></i>
               </button>
               <div className="dropdown-content">
                  <a href="#tratamientosD">Limpieza Dental</a>
                  <a href="#tratamientosD">Resinas</a>
                  <a href="#tratamientosD">Sellador</a>
                  <a href="#tratamientosD">Endodoncia</a>
                  <a href="#tratamientosD">Extracción Simple</a>             
               </div>
            </div>
            <a href="#Contacto">Contacto</a>
            <a href="#Agenda">Agenda tu Cita</a>  
            <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
         </div>          
        </Container>

        <Grid item xs={12} sm={6} md={3} >   
            <div id='Inicio'> </div>  
           <Grid item xs={12} sm={6} md={3}>
           <header>
              <h1>Lo que nos importa es verte sonreir!</h1>
               <p>Proporcionamos servicios dentales para toda la familia con un presupuesto accesibles, brindando un servicio de alta calidad, en un entorno profesional.  </p>

               <img src={unaSonrisa} width="25%" height="25%" />

               <div id="small-text">
               <small>Nuestro compromiso de brindar a los pacientes atención dental de la más alta calidad comienza con los dentistas. Nos enfocamos en incorporar talento joven, proactivo e innovador.
                  La capacitación continua garantiza que ofrezcamos a nuestros pacientes los tratamientos más modernos utilizando equipos y materiales de vanguardia.        
                  Nuestros dentistas se centran únicamente en la atención al paciente</small>
               </div>
            </header>            
           </Grid>
         <div className='contenedor'>
            <Grid container spacing={3}>
                  <Grid item xs={6} sm={6} md={3}>
                     <div>
                        <img src={muela3} width="150px" height="150px" />
                        <p>Odontologia</p>
                     </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                     <div >
                        <img src={instrumental}  width="150px" height="150px"/>
                        <p>Instrumental de Calidad</p>
                     </div> 
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                     <div >
                        <img src={sillondental}  width="150px" height="150px"/>
                        <p>Equipos Confortables</p>
                     </div>
                  </Grid>
                  <Grid item xs={6} sm={6} md={3}>
                     <div >
                        <img src={muela}   width="150px" height="150px" />
                        <p>Personal Profesional</p>
                     </div> 
                  </Grid>                      
            </Grid>
            <br> 
            </br>
         </div>    
         <div className='contacto'><h1>Tratamientos Dentales </h1></div>
            <div id='tratamientosD'>
               <Tratamientos/> 
            </div>
                              
               <Grid item xs={12} sm={6} md={3}>
                  <div className='contacto' id = 'Contacto'>
                     <h1>Contacto</h1>
                     <p>Correo electrónico: segurodental@dentista.com</p>
                     <p> Redes sociales: Facebook.com/Dentista</p>
                     <p> Oficinas Dentistas:</p>
                     <p> Av. Insurgentes Sur 1458, P. 19 y 20,</p>
                     <p> Col. Actipan, Benito Juárez, 03230, Ciudad de México.</p>
                     <p> Lunes a viernes de 8:00 a 17:00 horas.</p>
                  </div>       
               </Grid>                                      
         </Grid>
         <Formulario />
     </Container>      
  );
};

export default Principal;