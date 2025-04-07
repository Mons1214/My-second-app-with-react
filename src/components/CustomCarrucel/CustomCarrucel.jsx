import * as React from 'react';
import Box from '@mui/joy/Box'; // Importar Box para el contenedor

function CustomCarrucel({ data = [] }) {
  return (
    <Box>

      {data.map((item, index) => (
        <>
        </>
      ))}
    </Box>
  );
}

export default CustomCarrucel