import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// https://mui.com/components/text-fields/
const UserViewer = () => {

    const [userPrefix, setUserPrefix] = React.useState('');

    const handleChange = (event) => {
        setUserPrefix(event.target.value);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <TextField
                    id="outlined-basic"
                    variant="outlined" 
                    placeholder="Search for a user" 
                    onChange={handleChange} />
        </Box>
    );
}

export default UserViewer;
