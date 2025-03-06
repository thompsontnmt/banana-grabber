import React from 'react';
import { Box, Button, Card, Stack, ListItem, Typography } from '@mui/material';
import { CheckCircleOutline, HighlightOff, EditOutlined } from '@mui/icons-material';

export const ListItemComponent = ({listItems}) => {

	return ( 
		<>
		{listItems.map((item, index)  => 
<ListItem
key = { index }

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

{ item }

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
)}
</>
)}