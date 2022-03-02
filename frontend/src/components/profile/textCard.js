import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function TextCard(props) {
  const [displayName, setDisplayName] = React.useState(props.name);

  return (
    <Card sx={{ maxWidth: 420, borderRadius: '10px', marginX: 'auto', marginY: '20px'}}>
      <CardContent>
        <Typography variant="caption">
          Student
        </Typography>
        <Typography variant="h5">
          {displayName}
        </Typography>
      </CardContent>
    </Card>
  );
}