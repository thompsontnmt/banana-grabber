import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ListCard() {
  return (
    <Card sx={{
      width: '1350px',
      height: '700px',
      bgcolor: '#D9D9D9',
      marginBottom: '30px',
      marginLeft: '30px',
      marginRight: '30px',
    }} />
  );
}