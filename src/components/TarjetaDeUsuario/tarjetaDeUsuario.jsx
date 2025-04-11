import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const TarjetaDeUsuario = ({ imagen, titulo, descripcion }) => {
    return (
        <Card sx={{ 
            width: "350px", 
            margin: "10px", 
            border:"3px solid"
            }}>

            <CardContent sx={{
                display:"flex", 
                alignItems:"center", 
                flexFlow:"column"}}>
                <Box>
                    <Avatar sx={{
                        height: "50%", 
                        width: "60%", 
                        display:"flex", 
                        alignItems:"center", 
                        border:"6px solid", }} alt="Remy Sharp" src={imagen} >
                    </Avatar>
                </Box>
                <Box sx={{ 
                    display: "flex", 
                    height: "100%", 
                    width: "auto", 
                    alignItems:"center", 
                    justifyContent:"center"
                    }}>
                    <Typography>{titulo}</Typography>
                    <Typography>{descripcion}</Typography>
                </Box>
            </CardContent>
        </Card>
    )
};


export default TarjetaDeUsuario;

