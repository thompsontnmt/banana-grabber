import React from 'react';
import { Box, Typography } from '@mui/material';

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
      <Typography variant="h1">Lets Fucking Do This</Typography>
    </Box>
  );
}

export default ToDoList;
