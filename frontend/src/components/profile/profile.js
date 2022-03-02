import Image from './image';
import TextCard from "./textCard";
import StatsCard from './stats';
import { Container, Box } from '@mui/material';
import React from 'react';

export default function Profile () {
    const imgProps = {img: "/images/profile.png"}
    return (
    <Box style={{border: '2px solid black', borderRadius: '10px', marginLeft:'10%', marginRight:'10%', marginTop:'2%', marginBottom:'2%' }}>
        <Box
        // marginLeft='10%'
        marginY='6px'
      display="block"
    //   flexDirection="column"
      // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
      height="90vh" // fixed the height
      sx={{
        //   border: "2px solid black",
        // borderRadius: '10px',
        overflowY: "scroll", // added scroll
        alignItems: 'center',
    }}
    >
<<<<<<< HEAD
            <Image {...imgProps}/>
            <TextCard/>
            <StatsCard/>
            <Image {...imgProps}/>
            <Image {...imgProps}/>
            <TextCard/>
            <Image {...imgProps}/>
            <TextCard/>
            <Image {...imgProps}/>
            <Image {...imgProps}/>
=======
            <Image/>
            <TextCard name="Good Student"/>
            <StatsCard/>
            <Image/>
            <Image/>
            <TextCard name="Good Student"/>
            <Image/>
            <TextCard name="Good Student"/>
            <Image/>
            <Image/>
>>>>>>> main
        </Box>
    </Box>
    );
}
