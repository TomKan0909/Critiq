import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const cardTextCardStyle = { maxWidth: 420, borderRadius: '10px', marginX: 'auto', marginY: '20px'}

export default function TextCard({title, content}) {

  return (
    <Card sx={cardTextCardStyle}>
      <CardContent>
        <Typography variant="caption">
          {title}
        </Typography>
        <Typography variant="h5">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}