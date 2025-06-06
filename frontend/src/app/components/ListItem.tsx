import React from 'react';
import { Checkbox, IconButton, ListItem } from '@mui/material';
import {
  CheckCircleOutline,
  HighlightOff,
  EditOutlined,
  CircleOutlined,
} from '@mui/icons-material';
import { ListItem as ListItemType } from '../page';

interface Props {
  listItems: ListItemType[];
  isComplete: boolean;
  handleDeleteTask: (id: number) => void;
  handleTaskCompletion: (id: number) => void;

}

export const ListItemComponent = ({ listItems, handleDeleteTask, handleTaskCompletion, isComplete}: Props) => {
  return (
  
    <>
      {listItems.map((item) => (
        <ListItem
          key={item.id}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: 1,
            justifySelf: 'center',
            width: 1250,
            height: 100,
            boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
            fontFamily: 'tahoma',
            display: 'grid',
            gridTemplate: '1fr / 1fr 10fr 1fr 1fr',
            textDecoration: isComplete ? 'line-through' : 'none',
          }}
        >

          <Checkbox
            onClick={() => handleTaskCompletion(item.id)}
            icon={<CircleOutlined
              sx={{
                gridArea: '1/1/3/2',
                color: 'green',
                backgroundColor: '#D9D9D9',
                borderRadius: '100%',
                fontSize: '60px'
                // placeSelf: 'center',
                
              }}
               />} 
            checkedIcon={<CheckCircleOutline
              sx={{
                gridArea: '1/1/3/2',
                color: 'green',
                backgroundColor: '#D9D9D9',
                borderRadius: '100%',
                fontSize: '60px',
                justifySelf: 'center',
              }}
              />}
           />

          <div 
            className='itemInfo'
            style={{
              display: 'grid',
              gridTemplate: '1fr .25fr / 1fr'

            }}          
          >

          <div 
            className='description'
            style={{
              gridArea: '1/1/2/2',
              fontSize: '28px',
              padding: '10px',
              paddingLeft: '20px'
            }}
            >
          {item.description}
          </div>

          <div 
            className='dateAndTime'
            style={{
              gridArea: '2/1/3/2',
              fontSize: '14px',
              padding: '10px',
              paddingLeft: '20px'
            }}
            >
              Date & Time
          </div>
              </div>


          <EditOutlined
            sx={{
              color: 'green',
              borderRadius: '100%',
              fontSize: '60px',
              justifySelf: 'center',
              gridArea: '1 / 3 / 2 / 4'
            }}
          ></EditOutlined>
          
          <IconButton
            onClick={() => handleDeleteTask(item.id)}>
          <HighlightOff
            sx={{
              gridArea: '1 / 4 / 3 / 5',
              color: 'red',
              backgroundColor: '#D9D9D9',
              borderRadius: '100%',
              fontSize: '60px',
              justifySelf: 'center',
            }}
            ></HighlightOff>
            </IconButton>
        </ListItem>
      ))}
    </>
  );
};
