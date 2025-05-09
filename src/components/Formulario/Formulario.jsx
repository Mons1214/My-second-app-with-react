import { Box, TextField, Typography } from '@mui/material';




const Formulario = () => {
    return (
        <Box sx={{
            border: "1px solid",
            width: "50vw",
            height: "400px",
            display: "flex",
            flexFlow:"column"
        }}>
            <Typography sx={{
                width:"100%",
                height:"40px",
                backgroundColor:"darkviolet"

            }}>Formulario:</Typography>
            <TextField sx={{
                backgroundColor:"plum"
            }}
             id="filled-basic" color="secondary" label="Name" variant="filled" />
            <TextField sx={{
                backgroundColor:"lightsalmon"
            }}
             id="filled-basic" color="warning" label="Age" variant="filled" />
            <TextField sx={{
                backgroundColor:"yellowgreen"
            }}
             id="filled-basic" color="success" label="Last-Name" variant="filled" />
            <TextField  sx={{
                backgroundColor:"mediumorchid"
            }}
            id="filled-basic" color="secondary" label="Email" variant="filled" />
            <TextField sx={{
                backgroundColor:"sandybrown"
            }}
            
            id="filled-basic" color="warning" label="Telephone" variant="filled" />
        </Box>
    );
}

export default Formulario;