import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';


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
  // const [nombre, setNombre] = useState('');
  // const [correo, setCorreo] = useState('');
  // const [telefono, setTelefono] = useState('');
  // const [comentario, setComentario] = useState('');
   const [value, setValue] = useState(new Date);
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);   
  // const [errorTitulo, setErrorTitulo] = useState(false);
  // const [leyenda, setLeyenda] = useState('');

   const {register,formState:{errors}, handleSubmit } = useForm();
   const onSubmit = (data) => console.log(data);

    const handleChange = (newValue) => {
        setValue(newValue);
      };   

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


   return (
    <Container maxWidth="xs" className='formulario' id='Agenda'>
      <h1>AGENDA TU CITA</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
            <TextField
                variant="outlined"
                label="Nombre"
                fullWidth
                autoComplete="Nombre"
                placeholder="Monica Lopez"
                //autoFocus
                {...register("nombre", {
                required: "Dato requerido",
                pattern: {
                    value: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
                    message: "El nombre solo puede contener letras y espacios.",
                },
                })}
                error={!!errors?.nombre}
                helperText={errors?.nombre ? errors.nombre.message : null}
            />
          </Box>
          <Box mb={2}>
            <TextField
                variant="outlined"
                label="Correo Electrónico"
                fullWidth
                autoComplete="correo"
                placeholder="correo@correo.com"
                //autoFocus
                {...register("correo", {
                required: "Dato requerido",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.",
                },
                })}
                error={!!errors?.correo}
                helperText={errors?.correo ? errors.correo.message : null}
            />
            </Box>
          <Box mb={2}>
            <TextField
                variant="outlined"
                label="Teléfono"
                fullWidth
                autoComplete="telefono"
                placeholder="5523147747"
                //autoFocus
                {...register("telefono", {
                required: "Dato requerido",
                minLength: {
                    value: 10,
                    message: "No debe ser menor a 10",
                },
                maxLength : {
                    value: 14,
                    message: "No debe ser mayor a 14",
                },
                pattern: {
                    value: /^\d{10,14}$/,
                    message: "El telefono solo puede contener numeros y el maximo son 14 dígitos.",
                },
                })}
                error={!!errors?.telefono}
                helperText={errors?.telefono ? errors.telefono.message : null}
            /> 
          </Box>
          <Box mb={2} >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                <DateTimePicker
                    label="Fecha y Hora"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                </Stack>
                </LocalizationProvider>
          </Box>
          <Box mb={2}>                               
            <TextField
                variant="outlined"
                label="Comentarios"
                fullWidth
                autoComplete="Comentarios"
                placeholder="Dejános tus comentarios y dudas"
                id="outlined-multiline-static"
                multiline
                rows={4}
                //autoFocus
                {...register("Comentarios")}
                error={!!errors?.comentarios}
                helperText={errors?.comentarios ? errors.comentarios.message : null}
            />
        </Box>
        <Grid item xs={12} align="center">
        <div>
               <Checkbox {...label} />
               <Button onClick={handleOpen}>Acepto la política de privacidad y uso de datos personales.</Button>
               <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
               >
                  <Box sx={style}>
                     <Typography id="modal-modal-title" variant="h6" component="h2">
                        Terminos y Condiciones
                     </Typography>
                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        IDENTIDAD DEL RESPONSABLE QUE RECABA LOS DATOS
                        “DentiNori”, en lo sucesivo “DentiNori”, está comprometido a protegerte a ti y tus seres queridos. 
                        Como parte de esta protección, te informamos que los datos personales que nos proporciones son tratados 
                        con absoluta confidencialidad y que contamos con las medidas de seguridad suficientes para garantizar su
                        protección, en apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, 
                        en lo sucesivo “la Ley”. Por ello, ponemos a tu disposición nuestro aviso de privacidad.

                        DOMICILIO DEL RESPONSABLE QUE RECABA LOS DATOS
                        “DentiNori”, con domicilio en Durango No. 263, piso 9, Colonia Roma, Delegación Cuauhtémoc, C.P. 06700, 
                        Ciudad de México, Teléfono 26 23 23 23 ext. 1202 es responsable de recabar tus datos personales, 
                        del uso que se le dé a los mismos y de su protección.

                        IDENTIDAD DEL RESPONSABLE QUE RECABA LOS DATOS
                        Los datos personales que recabamos directa o indirectamente de ti, o los que se generen de la relación 
                        que lleguemos a establecer y que son necesarios para otorgarte los servicios que se deriven de la misma, 
                        serán utilizados según sea el caso para las siguientes finalidades primarias:
                     </Typography>
                  </Box>
               </Modal>
            </div> 
            </Grid>        
        <Button type="submit" variant="contained" color="primary" fullWidth >
          Enviar
        </Button>
      </form>      
    </Container>    
   );
};

export default Forma;