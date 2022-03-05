import { Table, TableBody } from '@mui/material';
import UserInfo from './userInfo';

const UserInfoList = (props) => {
    const {users} = props

    return (
        <Table>
            <TableBody>
                {users.slice(0,5).map(user => (
                    <UserInfo key={user} user={user}>
                    </UserInfo>
                    ))}
            </TableBody>
        </Table>
    )};

export default UserInfoList;
