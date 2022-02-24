import { Table, TableBody, TableRow } from '@mui/material';
import Button from '@mui/material/Button';

const UserInfoList = (props) => {
    console.log(props.users)
    return (
        <Table>
            <TableBody>
                {props.users.map(user => (
                    <TableRow>
                        <Button>{user}</Button>
                    </TableRow>
                    ))}
            </TableBody>
        </Table>
    )};

export default UserInfoList;
