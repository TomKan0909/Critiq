import * as React from 'react';
import TextField from '@mui/material/TextField';
import UserInfoList from './userInfoList';
import { Container, Typography } from '@mui/material';
import { titleStyle } from '../../styles'
import usernames from '../../../data/usernames';

// https://mui.com/components/text-fields/
const UserViewer = () => {

    const [users, setUsers] = React.useState([]);

    const handleChange = (event) => {
        const prefix = event.target.value.toLowerCase()
        const userSubset = getUserSubset(prefix)
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
            <Typography sx={titleStyle} variant="h2" gutterBottom>Search for a User</Typography>
            <TextField onChange={handleChange} fullWidth sx={formTheme}/>
            <UserInfoList users={users}></UserInfoList>
        </Container>
    );
}

export default UserViewer;
