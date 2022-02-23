import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

// https://mui.com/components/grid/
const DataSelector = (props) => {

    const {data, setData} = props

    const handleChange = (event) => {
        setData(event.target.value);
    };

    return (
        <Grid container rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
            alignItems="center">
            <Grid item xs={2}>
                <h1>Select data:</h1>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel >Data</InputLabel>
                    <Select
                        value={data}
                        label="Age"
                        onChange={handleChange}>
                        <MenuItem value={'None'}>None</MenuItem>
                        <MenuItem value={'ageDistribution'}>Age Distribution</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default DataSelector;
