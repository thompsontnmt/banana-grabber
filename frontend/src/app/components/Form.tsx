import { Modal, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { ListItem } from '../page';
import AddIcon from '@mui/icons-material/Add';
import { open } from 'node:inspector';

interface Props {
  handleToggleForm: () => void;
  handleAddTask: (task: string, editingItem: ListItem | null, dateTime: string) => void;
  // isOpen: boolean;
  editingItem: ListItem | null;
}
export const Form = ({ handleToggleForm, handleAddTask, editingItem
}) => {
  const [task, setTask] = useState(editingItem?.description ?? '');
  const [dateTime, setDateTime] = useState('');
  useEffect(() => {
    setTask(editingItem?.description ?? '');
    setDateTime(editingItem?.dateTime ?? '');
  }, [editingItem]);


  const handleSubmit = (e) => {
  e.preventDefault();
  if (task.trim() !== '') {
    handleAddTask(task, editingItem, dateTime);
  }
};




  return (
      <Box
        style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '3px',
            justifySelf: 'center',
            width: 1250,
            height: 100,    
            boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
            fontFamily: 'tahoma',
            justifyContent: 'space-between',
            alignItems: 'center',
          }} 
          >

        <form onSubmit={handleSubmit}
            style={{
              height: 100,
              width: 1250,
              display: 'grid',
              gridTemplate: '1fr .5fr / 1fr 10fr 1fr 1fr',
              
          }}
        >
          <input
            placeholder="Task description"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              width: '500',
              border: 'none',
              fontFamily: 'tahoma',
              fontSize: '28px',
              gridArea: '1/2/2/3',
              padding: '10px',
              paddingLeft: '28px'
            }}  
          />
          <input
            placeholder="Date & Time"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            style={{
              border: 'none',
              fontFamily: 'tahoma',
              fontSize: '14px',
              color: 'gray',
              gridArea: '2/2/3/3',
              padding: '10px',
              width: '200px',
              paddingLeft: '28px'
            }}
          
          />
            <Button
              type="button"
              onClick={() => {handleToggleForm()}}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              style={{
                backgroundColor: 'red',
                color: 'white',
                fontSize: '14px',
                textTransform: 'none',
                gridArea: '1/4/3/5',
                height: '40px',
                placeSelf: 'center',
              }}
              >
              Cancel
              </Button>

            <Button
              type="submit"
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              
              sx={{
                backgroundColor: 'blue',
                color: 'white',
                borderRadius: '2',
                fontSize: '14px',
                placeSelf: 'center',
                gridArea: '1/3/3/4',
                textTransform: 'none',
                height: '40px',
              }} 
              > {editingItem ? 'Save' : '+Add'} 
              </Button>
        </form>
      </Box>
    
  );
};
