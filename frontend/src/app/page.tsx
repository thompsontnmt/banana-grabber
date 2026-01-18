'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Card, Stack } from '@mui/material';
import { ListItemComponent } from './components/ListItem';
import Form from './components/Form';

export interface ListItem {
  id: number;
  description: string
  isComplete: boolean;
}

const ToDoList = () => {
  const listData = [];
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [listItems, setListItems] = useState([]) 
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('listItems');
    if (saved) {
      setListItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(listItems));
  }, [listItems])

  const handleToggleForm = (event) => {
    setAnchorEl((prev) => (prev ? null : event.currentTarget));

  };

  const handleAddTask = (task: string) => {
    setListItems([
      ...listItems,
      { id: listItems.length + 1, description: task, isComplete: false},
    ]);
    handleToggleForm({currentTarget: anchorEl}); // Close modal after adding task
  };  

  const handleDeleteTask = (id: number) => {
    setListItems(listItems.filter(listItem => listItem.id !== id));
  };

  const handleTaskCompletion = () => {
    setIsComplete(!isComplete);
  };

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
          width: 300,
          bgcolor: 'blue',
          color: 'white',
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 4,
          textTransform: 'none',
          height: 70,
          px: 2,
          py: 0,
          minHeight: 70,
          borderRadius: '8px 0 0 8px',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={handleToggleForm}
      >
        +Add To Do
      </Button>

      <Card
        sx={{
          width: 1350,
          height: 550,
          bgcolor: '#D9D9D9',
          borderRadius: "8px 0 0 8px",
          justifySelf: 'center',
        }}
      >
        <Stack
          gap={2}
          sx={{
            direction: 'column',
            justifySelf: 'center',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <ListItemComponent listItems={listItems} handleDeleteTask={handleDeleteTask} handleTaskCompletion={handleTaskCompletion} isComplete={isComplete}/>
           <Form
              anchorEl={anchorEl}
              handleToggleForm={handleToggleForm}
              handleAddTask={handleAddTask}
            />
        </Stack>
      </Card>
    </Box>
  );
};

export default ToDoList;
