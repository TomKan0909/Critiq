import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Plot from "./plot";
import { Container, Typography } from '@mui/material/';
import { titleStyle } from '../../styles'
import DataSelector from './dataSelector';

// https://mui.com/components/grid/
const KeyStats = () => {

    const [source, setSource] = React.useState('None');

    const handleChange = (event) => {
        setSource(event.target.value);
    };


    return (
        <Container>
            <Typography sx={titleStyle} variant="h2" gutterBottom>Key Statistics</Typography>
            <DataSelector source={source} onChange={handleChange}/>
            <Plot source={source}/>
        </Container>
    );
};

export default KeyStats;
