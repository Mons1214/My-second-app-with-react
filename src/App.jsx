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
      description: '3.98M views',
    },
  ];

  const Helados = [
    {
      src: 'https://i.pinimg.com/736x/fc/52/d1/fc52d1b09ff173cc5d59bffd723e4499.jpg',
      title: 'Vainilla',
      description: '4.21M views',
    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Pastel',
      description: '4.74M views',
    },
    {
      src: 'http://i.pinimg.com/736x/15/d1/f9/15d1f9df82db88ab3e40d9c56d4df1ef.jpg',
      title: 'Helado',
      description: '3.98M views',
    },
  ];


  return (
    <Box sx={{ width:"98vw", height:"98uvh", display:"flex", flexFlow:"column", alignItems:"center", gap: "1em", border: "6px solid"}}>
      <Bartext></Bartext>
      <TarjetaDeUsuario
      imagen={Postres[0].src}
      titulo={Postres[0].title}
      descripcion={Postres[0].description}
      />
      <TarjetaDeUsuario
      imagen={Helados[2].src}
      titulo={Helados[2].title}
      descripcion={Helados[2].description}
      />
      <TarjetaDeUsuario
      imagen={Postres[1].src}
      titulo={Postres[1].title}
      descripcion={Postres[1].description}
      />
      <Box sx={{ display:"flex", flexFlow:"row", gap: "50px 100px"}}>
        <CustomCarrucel data={Postres}></CustomCarrucel>
        <CustomCarrucel data={Helados}></CustomCarrucel>
      </Box>
    </Box>
  );
}

export default App;
