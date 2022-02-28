import * as React from 'react';
import Button from '@mui/material/Button';
import { Container, TableRow } from '@mui/material';
import Modal from '@mui/material/Modal';
import Profile from '../../profile/profile'

// https://stackoverflow.com/a/67335455
const style = {
  bgcolor: 'background.paper',
  border: '2px solid #000',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

// https://mui.com/components/modal/
export default function UserInfo(props) {

  const {user} = props

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableRow>
      <Button onClick={handleOpen}>{user}</Button>
      <Modal open={open} onClose={handleClose}>
        <Container sx={style}><Profile/></Container>
      </Modal>
    </TableRow>
  );
}