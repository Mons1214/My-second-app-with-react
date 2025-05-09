
import React, { useState } from 'react';
import { Box, Typography} from '@mui/material'

const Contador = () => {
        const [stateNumber, setStateNumber] = useState(0)
        let counter = 0;
        const sumar = () => {
            let suma = stateNumber + 1
            setStateNumber(suma)
            console.log(stateNumber);
        };


    return (
        <Box>
            <Typography>{stateNumber}</Typography>
            <button onClick={sumar}>Presiona aqui</button>
        </Box>

    )
}

export default Contador;