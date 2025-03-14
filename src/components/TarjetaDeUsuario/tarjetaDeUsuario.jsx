import React from "react";
import { Card, CardContent, Typography, Avatar, } from "@mui/material";

const TarjetaDeUsuario = () => {
    return (
        <Card>
            <CardContent>
                <Avatar></Avatar>
                <Typography>Nombre</Typography>
                <Typography>Descripcion</Typography>
            </CardContent>
        </Card>
    )
};


export default TarjetaDeUsuario;

