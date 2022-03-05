import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DataSelector = (props) => {

    const {source, onChange} = props

    const handleChange = (event) => {
        onChange(event)
    };


    const formTheme = {
        marginTop: '2em',
        marginBottom: '2em'
    }

    return (
        <FormControl fullWidth sx={formTheme}>
            <InputLabel>Data</InputLabel>
            <Select value={source} label="Age" onChange={handleChange}>
                <MenuItem value={'None'}>None</MenuItem>
                <MenuItem value={'ageDistribution'}>Age Distribution</MenuItem>
                <MenuItem value={'exercise'}>Exercise</MenuItem>
            </Select>
        </FormControl> 
    );
};

export default DataSelector;
