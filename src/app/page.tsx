import React from 'react';
import { Box, Typography } from '@mui/material';
import ListCard from './components/ListCard';


const ToDoList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // This sets the height to 100% of the viewport height
      }}
    >
      <ListCard /> 
    </Box>
  );
}

export default ToDoList;
