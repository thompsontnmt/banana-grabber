'use client';

import { Popover } from '@mui/material';
import { useState } from 'react';

export default function Form({
  anchorEl,
  onClose,
  handleAddTask,
}: {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  handleAddTask: (task: string) => void;
}) {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTask(task);
    setTask('');
    onClose();
  };

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "center", horizontal: "right" }}
      transformOrigin={{ vertical: "center", horizontal: "left" }}
      PaperProps={{
        elevation: 0,
        sx: { 
          bgcolor: 'white',
          overflow: 'hidden',
          transition: 'width 200mx ease',
          width: anchorEl ? 1000 : 0,
          height: 68,
          padding: 0,   
          border: '1px solid lightgray',
          borderRadius: "0 8px 8px 0",
          ml: 0,
          alignItems: 'center',



         },
      }}
    >
      <form onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          width: '100%',
          height: '100%',
          padding: 20,
          borderRadius: '0 8px 8px 0',
          boxSizing: 'border-box',
        }}>

        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Your next task'
            style={{
              height: 40,
              lineHeight: '40px',
              width: 700,
              fontFamily: 'tahoma',
              fontSize: 20,
              padding: '2px 2px 2px 20px',
              border: 'none',
              borderRadius: '8px',
              outline: 'none'
  }}
        />
        <button 
          type="submit"
          style={{
            height: 40,
            width: 100,
            fontFamily: 'tahoma',
            fontSize: 20,
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            padding: '8px'
          }}>Submit
        </button>

        <button 
          type="button" 
          onClick={onClose}
          style={{
            height: 40,
            width: 100,
            fontFamily: 'tahoma',
            fontSize: 20,
            border: 'none',
            borderRadius: '5px',
            padding: '8px'
          }}
          > Cancel 
        </button>
      </form>
    </Popover>
  );
}
