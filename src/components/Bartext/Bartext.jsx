import * as React from 'react';
import Box from '@mui/joy/Box'
import { Typography } from '@mui/material';


function Bartext({ texto }) {
    return (
        <Box
            sx={{
                backgroundColor: "#880E4F",
                textAlign: "center",
                padding: 2,
                width: "100%",
                display: "flex",
                top: 0,
                left: 0,
                heigth: "60px",
                Color: "white",
                lineHeight: "60px",
                justifyContent: "center"
            }} >

            <Typography variant="h4" component="h1" gutterBottom color='error'>
            🥞🥤🍮🍦Bienvenido a Mons Desserts 🍨🍰☕🍩
            </Typography>
        </Box>
    );
}

export default Bartext