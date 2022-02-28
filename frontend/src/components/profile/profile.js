import Image from './image';
import TextCard from "./textCard";
import StatsCard from './stats';
import { Container, Box } from '@mui/material';
import React from 'react';

export default function Profile () {
    return (
    <Box style={{border: '2px solid black', borderRadius: '10px', marginLeft:'10%', marginTop:'2%'}}>
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
            <Image/>
            <TextCard/>
            <StatsCard/>
            <Image/>
            <Image/>
            <TextCard/>
            <Image/>
            <TextCard/>
            <Image/>
            <Image/>
        </Box>
    </Box>
    );
}
