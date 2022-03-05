import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Plot from "./plot";
import { Container, Typography } from '@mui/material/';

// https://mui.com/components/grid/
const KeyStats = () => {

    const [data, setData] = React.useState('None');

    const handleChange = (event) => {
        setData(event.target.value);
    };

    const titleTheme = {
        marginTop: '0.35em'
    }

    const formTheme = {
        marginTop: '2em',
        marginBottom: '2em'
    }

    return (
        <Container>
            <Typography sx={titleTheme} variant="h2" gutterBottom={true}>Key Statistics</Typography>
            <FormControl fullWidth sx={formTheme}>
                <InputLabel>Data</InputLabel>
                <Select value={data} label="Age" onChange={handleChange}>
                    <MenuItem value={'None'}>None</MenuItem>
                    <MenuItem value={'ageDistribution'}>Age Distribution</MenuItem>
                    <MenuItem value={'exercise'}>Exercise</MenuItem>
                </Select>
            </FormControl> 
            <Plot source={data}></Plot>
            <Typography sx={titleTheme} variant="h2" gutterBottom={true}>Search for a User</Typography>
        </Container>
    );
};

export default KeyStats;
