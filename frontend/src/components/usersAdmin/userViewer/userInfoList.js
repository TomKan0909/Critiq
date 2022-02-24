import { Table, TableBody, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import UserInfo from './userInfo';

const UserInfoList = (props) => {
    console.log(props.users)
    return (
        <Table>
            <TableBody>
                {props.users.map(user => (
                    <UserInfo user={user}>
                    </UserInfo>
                    ))}
            </TableBody>
        </Table>
    )};

export default UserInfoList;
