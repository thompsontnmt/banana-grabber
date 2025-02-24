
import React from 'react';
import { Box, Button, Card, Stack, ListItem, Typography } from '@mui/material';
import { CheckCircleOutline, HighlightOff, EditOutlined } from '@mui/icons-material';

const ToDoList = () => {
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
          width: 250,
          bgcolor: 'blue',
          color: 'white',
          borderRadius: 2,
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 3,
          textTransform: 'none',
        
        }}> +Add To Do
      </Button>

      <Card
        sx={{
          width: 1000,
          height: 500,
          bgcolor: '#D9D9D9',
          borderRadius: 2,
          justifySelf: 'center',
        }} 
        >

          <Stack gap={2} 
            sx = {{
              direction: 'column',
              justifySelf: 'center',
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5,
              

            }}>
                <ListItem
                  sx = {{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 1,
                    justifySelf: 'center',
                    width: 900,
                    height: 60,
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                    fontFamily: 'tahoma',
                    display: 'grid',
                    gridTemplate: '1fr / 1fr 3fr 1fr 1fr',
                    
                  }}>
                      <CheckCircleOutline
                        sx= {{
                          color: 'green',
                          backgroundColor: '#D9D9D9',
                          borderRadius: '100%',
                          height: '50',
                        }}></CheckCircleOutline>

                      This is task #1

                      <EditOutlined
                        sx= {{
                          color: 'green',
                          backgroundColor: '#D9D9D9',
                          borderRadius: '100%',
                          height: '50',
                        }}></EditOutlined>

                        <HighlightOff
                          sx= {{
                            color: 'green',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            height: '50',
                        }}></HighlightOff> 

                </ListItem>

                <ListItem
                    sx = {{
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: 1,
                      justifySelf: 'center',
                      width: 900,
                      height: 60,
                      boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                      fontFamily: 'tahoma',
                  }}
                 >This is task #2</ListItem>

                <ListItem
                  sx = {{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 1,
                    justifySelf: 'center',
                    width: 900,
                    height: 60,
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                    fontFamily: 'tahoma',
                  }}>This is task #3</ListItem>
          </Stack>

        </Card>

    </Box>

  );
}

export default ToDoList;
