
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
        width: "300px",
        height: "300px",
        backgroundColor: "turquoise"
      }} ></Box>
      <Box sx={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "turquoise"
      }} />
      <Box sx={{
        border: "1px solid",
        width: "350px",
        height: "100px",
        backgroundColor: "azure"

      }}></Box>
      <Box sx={{
        width: "0",
        height: "0",
        borderTop: "40px solid transparent",
        borderRight: "80px solid violet",
        borderBottom: "40px solid transparent"
      }} />
      <Box sx={{
        border: "1px solid",
        width: "300px",
        height: "300px",
        backgroundColor: "turquoise",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }} >
        <Box sx={{
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          backgroundColor: "aliceblue",

        }} />
      </Box>
    </Box >
  );
}

export default App;