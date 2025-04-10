
import React from "react";
import { Box } from "@mui/material";
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
    <Box sx={{
      width: "98vw",
      height: "2000vh",
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
    }}>
      <Bartext></Bartext>

      <CustomCarrucel data={Postres}></CustomCarrucel>

      <Box sx={{
        border: "1px solid",
        width: "100px",
        height: "100px"
      }} />
      <Box sx={{
        border: "2px solid",
        width: "200px",
        height: "200px",
        borderRadius: "50%"
      }} />
      <Box sx={{
        border: "1px solid",
        width: "350px",
        height: "100px"
      }}></Box>
      <Box sx={{
        border: "2 px solid",
        width: "0",
        height: "0",
        borderLeft: "40px solid transparent",
        borderRight: "40px solid transparent",
        borderBottom: "80px solid lightblue"
      }} />
    </Box >
  );
}

export default App;