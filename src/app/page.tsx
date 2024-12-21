import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ListCard from './components/ListCard';


const ToDoList = () => {
  return (

  
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        height: '100vh', // This sets the height to 100% of the viewport height
        overflow: 'hidden',
      }}
    >
      <Button
         sx={{
          backgroundColor: '#24a0ed',
          height: '50px',
          width: '200px',
          color: 'white',
          fontFamily: 'Tahoma',
          fontSize: '24px',
          margin: '15px',
          padding: '10px',
          textAlign: 'center',
          marginTop: '30px',
          marginLeft: '30px',
         }}

        >+Add To Do
      </Button>
      <ListCard /> 
    </Box>
  );
}

export default ToDoList;
