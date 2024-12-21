import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import ListCard from './components/ListCard';
//import Button from '@mui/material/Button';

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
      <Button sx={{
        width: 50,
        height: 200,
        bgcolor: 'blue',
        borderRadius: 10,
      }}>
        Test
      </Button>
      <ListCard />
    </Box>

  );
}

export default ToDoList;
