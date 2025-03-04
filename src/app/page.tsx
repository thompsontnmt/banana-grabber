
import React from 'react';
import { Box, Button, Card, Stack, ListItem, Typography } from '@mui/material';
import { CheckCircleOutline, HighlightOff, EditOutlined } from '@mui/icons-material';
import { ListItemComponent } from './components/ListItem';

const ToDoList = () => {

const listItems = ["itemOne", "itemTwo", "itemThree"]

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplate: '1fr 4fr / 1fr',
        gridAutoFlow: 'column', 
        height: '100vh',
        overflow: 'hidden', 

      }}
    >
      <Button 
        sx={{
          gridArea: '1 / 1 / 2 / 2',
          justifySelf: 'start',
          alignSelf: 'center',
          height: 70,
          width: 300,
          bgcolor: 'blue',
          color: 'white',
          borderRadius: 2,
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 4,
          textTransform: 'none',
        
        }}> +Add To Do
      </Button>

      <Card
        sx={{
          width: 1350,
          height: 550,
          bgcolor: '#D9D9D9',
          borderRadius: 2,
          justifySelf: 'center',
        }} 
        >

          <Stack gap={2} 
            sx = {{
              direction: 'column',
              justifySelf: 'center',
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5,
              
            }}>


                <ListItemComponent listItems = {listItems} />
               
              
          </Stack>

        </Card>

    </Box>

  );
}

export default ToDoList;
