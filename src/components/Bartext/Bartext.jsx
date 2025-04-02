import * as React from 'react';
import Box from '@mui/joy/Box'
import { Typography } from '@mui/material';


export default function Bartext({data = []}) {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Este es el texto
            </Typography>
        </Box>
    );
  }