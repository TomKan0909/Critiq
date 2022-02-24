import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import usernames from '../../../data/usernames';
import UserInfoList from './userInfoList';

// https://mui.com/components/text-fields/
const UserViewer = () => {

    const [users, setUsers] = React.useState([]);

    const handleChange = (event) => {
        const prefix = event.target.value.toLowerCase()
        const userSubset = getUserSubset(prefix)
        console.log(userSubset)
        setUsers(userSubset);
    };

    const getUserSubset = (prefix) => {
        if (prefix == '') return []
        return usernames.filter(username => username.toLowerCase().startsWith(prefix))
    }

    return (
        <Box component="form">
            <TextField
                variant="outlined"
                placeholder="Search for a user"
                onChange={handleChange} />
            <UserInfoList users={users}></UserInfoList>
        </Box>
    );
}

export default UserViewer;
