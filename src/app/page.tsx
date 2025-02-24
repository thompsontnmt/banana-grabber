import React from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';

const ToDoList = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplate: '1fr 4fr / 1fr',
        gridAutoFlow: 'column', 
        height: '100vh', // This sets the height to 100% of the viewport height
        overflow: 'hidden',

      }}
    >
      <Button sx={{
        gridArea: '1 / 1 / 2 / 2',
        justifySelf: 'start',
        alignSelf: 'center',
        height: 70,
        width: 250,
        bgcolor: 'blue',
        color: 'white',
        borderRadius: 2,
        fontFamily: 'tahoma',
        fontSize: 34,
        marginLeft: 3,
        textTransform: 'none',
        
      }}> +Add To Do
      </Button>

      <Card sx={{
        width: 1000,
        height: 500,
        bgcolor: '#D9D9D9',
        borderRadius: 2,
        justifySelf: 'center',
      }} />

    </Box>

  );
}

export default ToDoList;
