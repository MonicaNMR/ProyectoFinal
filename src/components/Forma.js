import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";


const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

const Forma = () => {
   const [nombre, setNombre] = useState('');
   const [correo, setCorreo] = useState('');
   const [telefono, setTelefono] = useState('');
   const [comentario, setComentario] = useState('');
   const [value, setValue] = useState(new Date);
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);   
   const [errorTitulo, setErrorTitulo] = useState(false);
   const [leyenda, setLeyenda] = useState('');

   const {register,formState:{errors}, handleSubmit } = useForm();

   const expresionRegular = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        comentario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10,14}$/ // 10 a 14 numeros.
    }
    const handleChange = (newValue) => {
        setValue(newValue);
      };   

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
    const onSubmit = (data) => {
      console.log(data);
    };   


   return (
    <div className='formulario' id='Agenda'>
        <h1>AGENDA TU CITA </h1>
        <Grid container spacing={3}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className='formulario'>
               <label>nombre</label>
               <input type='text' {...register('nombre',{
                  pattern:/^[a-zA-ZÀ-ÿ\s]{1,40}$/
               })}
                />
               {errors.nombre?.type === 'pattern' && <p>requerido</p>}

               <label>correo</label>
               <input type='text' {...register('correo',{
                  pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
               })} />
               {errors.nombre?.type === 'pattern' && <p>Formato incorrecto</p>}
            </div>            
            <input type="submit" values="Enviar" />
         </form>
         </Grid>
      </div>
   );
};

export default Forma;