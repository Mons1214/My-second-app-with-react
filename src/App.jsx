import React from "react";
import { Typography, Button, Paper, Box } from "@mui/material";
import TarjetaDeUsuario from "../src/components/TarjetaDeUsuario/tarjetaDeUsuario.jsx";
import Carrucel from "../src/components/Carrucel/Carrucel.jsx";
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
    <Box sx={{ width:"98vw", height:"100uvh", border:"4px solid", display:"flex", flexFlow:"column", alignItems:"center", gap: "1em"}}>
      <Bartext></Bartext>
      <TarjetaDeUsuario 
        imagen={"https://i.pinimg.com/736x/d7/32/b4/d732b4b4c1fa2062cb537f778c168871.jpg"} 
        titulo={"Napolitano"} 
        descripcion={"El flan napolitano, con su irresistible combinación de textura cremosa y caramelo dorado, ha conquistado mesas alrededor del mundo y se ha convertido en un favorito indiscutible en la gastronomía latinoamericana"}
      />
      <TarjetaDeUsuario 
      imagen={"https://i.pinimg.com/736x/a0/b0/73/a0b07350e68d0bb5523ad4231c4f93f0.jpg"} 
      titulo={"Cafe"} 
      descripcion={"El flan se puede preparar con leche de coco, queso tipo crema, con un toque de naranja o limón, con leche condensada o con café. En este último caso, debes de utilizar unos buenos granos, preferentemente de la variedad arábica y tostado natural, cuya esencia engalana la receta."}
      />
      <Box sx={{ display:"flex", flexFlow:"row", gap: "50px 100px"}}>
        <Carrucel data={Postres}></Carrucel>
        <Carrucel data={Helados}></Carrucel>
      </Box>
    </Box>
  );
}

export default App;
