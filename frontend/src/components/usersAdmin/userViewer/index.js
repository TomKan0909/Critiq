import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import usernames from '../../../data/usernames';
import UserInfoList from './userInfoList';
import { Container } from '@mui/material';

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

    const formTheme = {
        marginTop: '2em',
        marginBottom: '2em'
    }

    return (
        <Container component="form">
            <TextField onChange={handleChange} fullWidth sx={formTheme}/>
            <UserInfoList users={users}></UserInfoList>
        </Container>
    );
}

export default UserViewer;
