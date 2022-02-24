import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TextCard() {
  return (
    <Card sx={{ maxWidth: 300, maxHeight: 300, borderRadius: '10px'}}>
      <CardContent>
        <Typography variant="caption">
          Loren Ipsum
        </Typography>
        <Typography variant="h5">
          Loren Ipsum 
        </Typography>
      </CardContent>
    </Card>
  );
}