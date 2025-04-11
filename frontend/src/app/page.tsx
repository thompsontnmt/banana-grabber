'use client';
import React, { useState, useEffect } from 'react';
import { Box, Button, Card, Stack } from '@mui/material';
import { ListItemComponent } from './components/ListItem';
import { Form } from './components/Form';

export interface ListItem {
  id: number;
  description: string
  isComplete: boolean;
}

const ToDoList = () => {
  const listData = [];
  
  const [isOpen, setIsOpen] = useState(false);
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

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleAddTask = (task: string) => {
    setListItems([
      ...listItems,
      { id: listItems.length + 1, description: task, isComplete: false},
    ]);
    handleToggleForm(); // Close modal after adding task
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
          height: 70,
          width: 300,
          bgcolor: 'blue',
          color: 'white',
          borderRadius: 2,
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 4,
          textTransform: 'none',
        }}
        onClick={() => handleToggleForm()}
      >
        +Add To Do
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
          {isOpen ? (
            <Form
              handleToggleForm={handleToggleForm}
              handleAddTask={handleAddTask}
              isOpen={isOpen}
            />
          ) : null}
        </Stack>
      </Card>
    </Box>
  );
};

export default ToDoList;
