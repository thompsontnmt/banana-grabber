
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
          width: 300,
          bgcolor: 'blue',
          color: 'white',
          borderRadius: 2,
          fontFamily: 'tahoma',
          fontSize: 34,
          marginLeft: 4,
          textTransform: 'none',
        
        }}> +Add To Do
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

          <Stack gap={2} 
            sx = {{
              direction: 'column',
              justifySelf: 'center',
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 5,
              
            }}>
                <ListItem
                // #1
                  sx = {{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 1,
                    justifySelf: 'center',
                    width: 1250,
                    height: 80,
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                    fontFamily: 'tahoma',
                    display: 'grid',
                    gridTemplate: '1fr 1fr / 1fr 10fr 1fr 1fr',
                    fontSize: '24px',
                    
                  }}>
                      <CheckCircleOutline
                        sx= {{
                          gridArea: '1/1/3/2',
                          color: 'green',
                          backgroundColor: '#D9D9D9',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                        }}></CheckCircleOutline>

                      This is task #1

                      <EditOutlined
                        sx= {{
                          color: 'green',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                          gridArea: '1 / 3 / 3 / 4',
                        }}></EditOutlined>

                        <HighlightOff
                          sx= {{
                            gridArea: '1 / 4 / 3 / 5',
                            color: 'red',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            fontSize: '60px',
                            justifySelf: 'center',
                        
                        }}></HighlightOff> 

                </ListItem>

                <ListItem
                  sx = {{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 1,
                    justifySelf: 'center',
                    width: 1250,
                    height: 80,
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                    fontFamily: 'tahoma',
                    display: 'grid',
                    gridTemplate: '1fr 1fr / 1fr 10fr 1fr 1fr',
                    fontSize: '24px',
                    
                  }}>
                      <CheckCircleOutline
                        sx= {{
                          gridArea: '1/1/3/2',
                          color: 'green',
                          backgroundColor: '#D9D9D9',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                        }}></CheckCircleOutline>

                      This is task #2

                      <EditOutlined
                        sx= {{
                          color: 'green',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                          gridArea: '1 / 3 / 3 / 4',
                        }}></EditOutlined>

                        <HighlightOff
                          sx= {{
                            gridArea: '1 / 4 / 3 / 5',
                            color: 'red',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            fontSize: '60px',
                            justifySelf: 'center',
                        
                        }}></HighlightOff> 

                </ListItem>

                <ListItem
                  sx = {{
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: 1,
                    justifySelf: 'center',
                    width: 1250,
                    height: 80,
                    boxShadow: '0px 5px 5px 0px rgba(0,0,0,0.10)',
                    fontFamily: 'tahoma',
                    display: 'grid',
                    gridTemplate: '1fr 1fr / 1fr 10fr 1fr 1fr',
                    fontSize: '24px',
                    
                  }}>
                      <CheckCircleOutline
                        sx= {{
                          gridArea: '1/1/3/2',
                          color: 'green',
                          backgroundColor: '#D9D9D9',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                        }}></CheckCircleOutline>

                      This is task #3

                      <EditOutlined
                        sx= {{
                          color: 'green',
                          borderRadius: '100%',
                          fontSize: '60px',
                          justifySelf: 'center',
                          gridArea: '1 / 3 / 3 / 4',
                        }}></EditOutlined>

                        <HighlightOff
                          sx= {{
                            gridArea: '1 / 4 / 3 / 5',
                            color: 'red',
                            backgroundColor: '#D9D9D9',
                            borderRadius: '100%',
                            fontSize: '60px',
                            justifySelf: 'center',
                        
                        }}></HighlightOff> 

                </ListItem>
          </Stack>

        </Card>

    </Box>

  );
}

export default ToDoList;
