import { List, ListItemText, Tab, Tabs, ListItemIcon } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { ListItem} from "@mui/material"
import { HiOutlineCake, HiOutlineLocationMarker } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { FaRulerVertical, FaGraduationCap } from 'react-icons/fa'
import { RiGlobeLine, RiSuitcaseLine } from 'react-icons/ri'
import { BiWine } from 'react-icons/bi'
import './stats.css'

// scrollbarWidth: 'thin', '&::-webkit-scrollbar': { width: '2px'}, '&::-webkit-scrollbar-track': {backgroundColor: 'orange', 
//     '&::webkit-scrollbar-thumb': {backgroundColor: 'red', borderRadius: 2}}

function StatsTop() {
  return(
    <Box sx={{ mx: 'auto', my: '3px', width: '380px', bgcolor: 'background.paper'}}>
       <List sx={{display: 'flex', flexDirection: 'row', width: 'auto', overflowX: 'scroll'}}>
        <ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem>
        <ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem><ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem><ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem><ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem><ListItem sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)'}}>
          <ListItemIcon>
            <HiOutlineCake/>
          </ListItemIcon>
          <ListItemText primary="Age" />
        </ListItem>
      </List>   

      {/* <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab icon={<HiOutlineCake/>} iconPosition='start' label='Age' sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
        <Tab icon={<CgProfile/>} iconPosition='start' label="Gender" sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
        <Tab icon={<FaRulerVertical/>} iconPosition='start' label="Height" sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
        <Tab icon={<HiOutlineLocationMarker/> } iconPosition='start' label="Location" sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
        <Tab icon={<RiGlobeLine/>} iconPosition='start' label="Ethnicity" sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
        <Tab icon={<BiWine/>} iconPosition='start' label="Alcohol?" sx={{borderRight: '1px solid rgba(0, 0, 0, 0.12)', paddingTop:'0px', paddingBottom:'0px' }}/>
      </Tabs> */}
    </Box>
    )
}

export default function StatsCard(){
    return (
        <Card sx={{ maxWidth: 420, marginX:'auto', marginY: '20px'}}>
          <CardContent>
          <StatsTop/>
          <Divider/>
          <Box sx={{ width: '100%', maxWidth: 420, bgcolor: 'background.paper' }}>
           <List>
               <ListItem>
                   <ListItemIcon>
                     <RiSuitcaseLine/>
                   </ListItemIcon>
                   <ListItemText primary="University of Toronto" />
               </ListItem>
               <Divider/>
               <ListItem>
                 <ListItemIcon>
                   <FaGraduationCap/>
                 </ListItemIcon>
                   <ListItemText primary="Just a human" />
               </ListItem>
           </List>
           </Box>
          </CardContent>
        </Card>
      );
}