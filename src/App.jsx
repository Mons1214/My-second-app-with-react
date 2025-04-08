import React from "react";
import { Box } from "@mui/material";
import TarjetaDeUsuario from "../src/components/TarjetaDeUsuario/tarjetaDeUsuario.jsx";
import CustomCarrucel from "./components/CustomCarrucel/CustomCarrucel.jsx";
import Bartext from "./components/Bartext/Bartext.jsx";

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


  return (
    <Box sx={{ width:"98vw", height:"98vh", display:"flex", flexFlow:"column", alignItems:"center", border: "6px solid"}}>
      <Bartext></Bartext>
        <CustomCarrucel data={Postres}></CustomCarrucel>
    </Box>
  );
}

export default App;
