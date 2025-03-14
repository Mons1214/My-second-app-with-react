import React from "react";
import { Container, Typography, Button, Paper, Box } from "@mui/material";
import TarjetaDeUsuario from "../src/components/TarjetaDeUsuario/tarjetaDeUsuario.jsx";
import Carrucel from "../src/components/Carrucel/Carrucel.jsx";

function App() {
  return (
    <Container fixed>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido a Mons Desserts 🍰
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }}>
        Explorar Recetas
      </Button>
      <TarjetaDeUsuario></TarjetaDeUsuario>
      <Carrucel></Carrucel>
    </Container>
  );
}

export default App;
