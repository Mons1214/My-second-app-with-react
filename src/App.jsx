
import React from "react";
import { Box } from "@mui/material";
import CustomCarrucel from "./components/CustomCarrucel/CustomCarrucel.jsx";
import Bartext from "./components/Bartext/Bartext.jsx";
import EjericiosDeComponentes from "./components/Ejercicios/Ejercicios.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";


function App() {
  const Postres = [
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Flan',
      description: 'Huevos, leche, caramelo',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Pastel',
      description: '4.74M views',
    },
    {
      src: 'http://i.pinimg.com/736x/15/d1/f9/15d1f9df82db88ab3e40d9c56d4df1ef.jpg',
      title: 'Helado',
      description: 'Huevos, leche, caramelo',
    },
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Flan',
      description: 'Huevos, leche, caramelo',
    },
  ];

  let isOn = false
  let condition = ""
  if (isOn === false) {
    condition = "none"
  } else {
    condition = "flex"
  }
  
  return (
    <Box sx={{
      width: "98vw",
      height: "500vh",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
    }}>
      <Bartext></Bartext>

      <CustomCarrucel data={Postres}></CustomCarrucel>

      <EjericiosDeComponentes display={condition}></EjericiosDeComponentes>

      <Formulario></Formulario>

    </Box >
  );
}


export default App;
