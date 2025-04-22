import * as React from 'react';
import { Box, TextField, Typography } from '@mui/material';




const Formulario = () => {
    return (
        <Box sx={{
            border: "1px solid",
            width: "50vw",
            height: "80vh",
            display: "flex",
            flexFlow:"column"
        }}>
            <Typography sx={{
                width:"100%",
                height:"40px",
                backgroundColor:"darkviolet"

            }}>Formulario:</Typography>
            <TextField sx={{
                backgroundColor:"slateblue"
            }}
             id="filled-basic" color="secondary" label="Name" variant="filled" />
            <TextField sx={{
                backgroundColor:"plum"
            }}
             id="filled-basic" color="warning" label="Age" variant="filled" />
            <TextField sx={{
                backgroundColor:"mediumslateblue"
            }}
             id="filled-basic" color="success" label="Last-Name" variant="filled" />
            <TextField  sx={{
                backgroundColor:"mediumorchid"
            }}
            id="filled-basic" color="secondary" label="Email" variant="filled" />
            <TextField sx={{
                backgroundColor:"deeppink"
            }}
            
            id="filled-basic" color="warning" label="Telephone" variant="filled" />

        </Box>
    );
}

export default Formulario;