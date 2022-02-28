import { Table, TableBody } from '@mui/material';
import UserInfo from './userInfo';

const UserInfoList = (props) => {
    const {users} = props

    return (
        <Table>
            <TableBody>
                {users.map(user => (
                    <UserInfo user={user}>
                    </UserInfo>
                    ))}
            </TableBody>
        </Table>
    )};

export default UserInfoList;
