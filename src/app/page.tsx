import React from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';

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
      <Button sx={{
        width: 50,
        height: 200,
        bgcolor: 'blue',
        borderRadius: 10,
      }}>
        Test
      </Button>
      <Card sx={{
        width: 800,
        height: 500,
        bgcolor: '#D9D9D9',
        borderRadius: 10,
      }} />
    </Box>

  );
}

export default ToDoList;
