'use client';
import React, { useRef, useState } from 'react';
import { Box, Button, Card, Stack } from '@mui/material';
import { ListItemComponent } from './components/ListItem';
import { Form } from './components/Form';

export interface ListItem {
  id: number;
  description: string;
  isComplete: boolean;
  dateTime: string;
}


const ToDoList = () => {
  const nextId =useRef(1);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [listItems, setListItems] = useState<ListItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<ListItem | null>(null);

  const handleToggleForm = () => {
    setIsOpen(!isOpen);
  };

  const handleAddTask = (task: string, editingItem: ListItem | null, dateTime: string) => {
    if (editingItem){
    setListItems(listItems.map(item =>
      item.id === editingItem.id ? { ...item, description: task, dateTime} : item
    ));
    setEditingItem(null);
    setIsOpen(false);
  } else {
    setListItems([ 
      ...listItems,
      { id: nextId.current++, description: task, isComplete: false, dateTime},
    ]);
    setIsOpen(false);
  };
}

  const handleDeleteTask = (id: number) => { 
    setListItems(listItems.filter(listItem => listItem.id !== id));
  };

  const handleTaskCompletion = (id: number) => {
    setListItems(listItems.map(item =>
    item.id === id ? { ...item, isComplete: !item.isComplete } : item
  ));
  };

    const handleEditTask = (id: number) => {
    const item = listItems.find(item => item.id === id);
    if (item) {
      setEditingItem(item);
      setIsOpen(true);
    }
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
      ref={buttonRef}
      onClick={() => handleToggleForm()}
        sx={{
          gridArea: '1 / 1 / 2 / 2',
          justifySelf: 'start',
          alignSelf: 'center',
          height: 100,
          width: 300,
          bgcolor: 'blue',
          color: 'white',
          borderRadius: 2,
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 4,
          textTransform: 'none',
        }}
      >
        + Add To Do
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
          <ListItemComponent 
            listItems={listItems} 
            handleDeleteTask={handleDeleteTask} 
            handleTaskCompletion={handleTaskCompletion} 
            handleEditTask={handleEditTask}
            />
          {isOpen ? (
            <Form
              handleToggleForm={handleToggleForm}
              handleAddTask={handleAddTask}
              isOpen={isOpen}
              editingItem={editingItem}
            />
          ) : null}
        </Stack>
      </Card>
    </Box>
  );
};

export default ToDoList;
