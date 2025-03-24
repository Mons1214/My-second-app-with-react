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
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}> 
      <Card variant="outlined" sx={{ width: 1, p: 0 }}>
        <List sx={{ py: 'var(--ListDivider-gap)' }}>
          {data.map((item, index) => (
            <React.Fragment key={item.title}>
              <ListItem>
                <ListItemButton sx={{ gap: 2 }}>
                  <AspectRatio sx={{ flexBasis: 120 }}>
                    <img
                      srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.src}?w=120&fit=crop&auto=format`}
                      alt={item.title}
                    />
                  </AspectRatio>
                  <ListItemContent>
                    <Typography sx={{ fontWeight: 'md' }}>{item.title}</Typography>
                    <Typography level="body-sm">{item.description}</Typography>
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