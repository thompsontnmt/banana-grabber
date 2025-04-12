import { Modal, Box, Button } from '@mui/material';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export const Form = ({ handleToggleForm, handleAddTask, isOpen }) => {
  const [task, setTask] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      handleAddTask(task);
      setTask(''); // Clear input after submission
    }
  };
  return (
    <Modal 
      open={isOpen} 
      onClose={handleToggleForm}
    >
        
      <Box
        style={{
          display: 'flex',
          padding: '10px', 
          backgroundColor: 'white',
          borderRadius: '5px',
          width: '800px',
          height: '50px',
          position: 'relative',
          top: '50px',
          left: '400px'
          
        }}

      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Task description"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              width: 500,
              border: 'none',
              fontFamily: 'tahoma',
              fontSize: 24,
              position: 'relative',
              left: '190px',
              top: '10px'


            }}
          
          />
          <div>
            <Button
              type="button"
              onClick={() => {handleToggleForm()}}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              style={{
                position: 'relative',
                backgroundColor: 'red',
                color: 'white',
                fontSize: '14px',
                bottom: '22px',
                left: '100px',
                textTransform: 'none'
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
                justifySelf: 'center',
                position: 'relative',
                bottom: '22px',
                right: '50px',
                textTransform: 'none',
              }} 
              > +Add 
              </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};
