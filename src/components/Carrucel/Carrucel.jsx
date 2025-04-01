import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Box from '@mui/joy/Box'; // Importar Box para el contenedor

export default function ListStackRatio({data = []}) {
  return (
    <Box sx={{ width:"300px ", height:"350px", maxHeight: "350px", border:"1px solid"}}> 
      <Card>
        <List sx={{ maxHeight: "350px", overflowY: "scroll", border: "0px solid" }}>
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem>
                <ListItemButton sx={{ border: "0px solid", gap: 2 }}>
                  <AspectRatio sx={{ border: "8px solid", flexBasis: 120 }}>
                    <img
                      srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.src}?w=120&fit=crop&auto=format`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <ListItemContent sx={{ border: "0px solid" }}>
                    <Typography color="primary" sx={{ }}>{item.title}</Typography>
                    <Typography color="neutral" sx={{ border: "0px solid" }} level="body-sm">{item.description}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
              {index !== data.length - 1 && <ListDivider />}
            </React.Fragment>
          ))}
        </List>
      </Card>
    </Box>
  );
}