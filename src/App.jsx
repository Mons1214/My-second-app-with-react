
import React from "react";
import { Box, TextField } from "@mui/material";
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
      Cuadrado
      <Box sx={{
        border: "1px solid",
        width: "300px",
        height: "300px",
        backgroundColor: "antiquewhite"
      }} ></Box>

      Circulo
      <Box sx={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "aqua"
      }} />
      Rectangulo
      <Box sx={{
        border: "1px solid",
        width: "350px",
        height: "100px",
        backgroundColor: "azure"
      }}></Box>

      Triangulo
      <Box sx={{
        width: "0",
        height: "0",
        borderTop: "40px solid transparent",
        borderRight: "80px solid violet",
        borderBottom: "40px solid transparent"
      }} />

      Cuadrado/Circulo
      <Box sx={{
        border: "1px solid",
        width: "300px",
        height: "300px",
        backgroundColor: "turquoise",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }} >
        <Box sx={{
          borderRadius: "50%",
          width: "100%",
          height: "100%",
          backgroundColor: "aliceblue",
        }} />
      </Box>
      Cuadrado/Triangulo
      <Box sx={{
        width: "100px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }} >
        <Box sx={{
          width: "0",
          height: "0",
          borderTop: "40px solid transparent",
          borderRight: "80px solid violet",
          borderBottom: "40px solid transparent",
          backgroundColor: "cyan"
        }} />
      </Box>

      <TextField>
        Circulo/Triangulo
      </TextField>
      <Box sx={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        display: "flex",
        border: "1px solid",
        justifyContent: "center"
      }} >
        <Box sx={{
          border: "1px solid",
          width: "0",
          height: "0",
          borderLeft: "40px solid transparent",
          borderRight: "40px solid transparent",
          borderBottom: "80px solid lightblue"
        }} />
      </Box>

      Circulo/Cuadrado
      <Box sx={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        display: "flex",
        border: "1px solid",
        justifyContent: "center",
        alignItems: "center"
      }} >
        <Box sx={{
          border: "1px solid",
          width: "60%",
          height: "60%"
        }} />
      </Box>


      Componente
      <Box sx={{
        border: "1px solid",
        width: "500px",
        height: "200px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end"
      }}>
        <Box sx={{
          border: "1px solid",
          width: "250px",
          height: "200px",
        }}>
          <Box sx={{
            border: "1px solid",
            width: "250px",
            height: "100px"
          }}
          ></Box>
        </Box>
      </Box>

      Componente de Componentes
      <Box sx={{
        width: "500px",
        height: "200px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "violet"
      }}>
        <Box sx={{
          width: "250px",
          height: "200px",
          backgroundColor: "turquoise"
        }}>
          <Box sx={{
            width: "250px",
            height: "100px",
            backgroundColor: "tomato"
          }}>
            <Box sx={{
              width: "250px",
              height: "100px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              backgroundColor: "teal"
            }}>
              <Box sx={{
                width: "125px",
                height: "100px",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                backgroundColor: "tan"
              }}>
                <Box sx={{
                  width: "100%",
                  height: "50%",
                  backgroundColor: "steelblue"
                }}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>




      Nuevecitoo de Paqueteee
      <Box sx={{
        width: "700px",
        height: "350px",
        display: "flex",
        backgroundColor: "steelblue"        
      }}>
        <Box sx={{
          width:"350px",
          height:"350px",
          display:"flex",
          backgroundColor:"tomato",
          alignItems:"end"
        }}
        >
          <Box sx={{
            width:"350px",
            height:"175px",
            backgroundColor:"thistle",
            display:"flex",
            alignItems:"center"
          }}>
            <Box sx={{
              width:"175px",
              height:"175px",
              backgroundColor:"skyblue"
            }}>
              <Box sx={{
                width:"175px",
                height:"88px",
                display:"flex",
                backgroundColor:"sandybrown"
              }}>
              </Box>
            </Box>
          </Box>
        </Box>
    </Box>





    </Box >
  );
}


export default App;
