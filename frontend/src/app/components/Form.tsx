import { Modal, Box } from '@mui/material';
import { useState } from 'react';

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
    <Modal open={isOpen} onClose={handleToggleForm}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={3}
        bgcolor="white"
        borderRadius={2}
      >
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Description"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <div>
            <button
              type="button"
              onClick={() => {
                handleToggleForm();
              }}
            >
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};
