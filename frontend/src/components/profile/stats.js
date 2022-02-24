import { List, ListItemText, Tab, Tabs } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader, CardMedia } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { ListItem} from "@mui/material"

function StatsTop() {
  return(
    <Box sx={{ maxWidth: 300, bgcolor: 'background.paper' }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
      </Tabs>
    </Box>
    )
}

export default function StatsCard(){
    return (
        <Card sx={{ maxWidth: 300 }}>
          <CardHeader
            action={
                <StatsTop />
            }
          />
        <Divider />
          <CardContent>
          <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
           <List>
               <ListItem>
                   <ListItemText primary="Dropout"/>
               </ListItem>
               <Divider/>
               <ListItem>
                   <ListItemText primary="Gigachad schizo"/>
               </ListItem>
           </List>
           </Box>
          </CardContent>
        </Card>
      );
}