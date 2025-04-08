import * as React from 'react';
import Box from '@mui/joy/Box'; // Importar Box para el contenedor
import TarjetaDeUsuario from '../TarjetaDeUsuario/tarjetaDeUsuario';

function CustomCarrucel({ data = [] }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", flexFlow:"column", flexWrap:"wrap", width:"98vw", height:"80vh", border:"1px solid"}}>
      {data.map((item) => (
        <>
          <TarjetaDeUsuario
            imagen={item.src}
            titulo={item.title}
            descripcion={item.description}
          />
        </>
      ))}
    </Box>
  );
}

export default CustomCarrucel
