import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TableRow } from '@mui/material';
import Modal from '@mui/material/Modal';
import Profile from '../../../routes/profile';
import Image from '../../profile/image';
import TextCard from '../../profile/textCard';
import StatsCard from '../../profile/stats';


// https://mui.com/components/modal/
const style = {
  // position: 'absolute',
  // transform: 'translate(-50%, -50%)',
  // top: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'scroll',
};

const modalStyle = {
  position: 'absolute',
  left: '40%',
  top: '10%',
  overflow: 'scroll',
  height: '100%',
  display: 'block',
  maxWidth:300,
}

// https://mui.com/components/modal/
export default function UserInfo(props) {

  const {user} = props

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableRow>
      <Button onClick={handleOpen}>{user}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={modalStyle}
      >
        <Box sx={style}>
          <Image></Image>
          <TextCard></TextCard>
          <StatsCard></StatsCard>
        </Box>
      </Modal>
    </TableRow>
  );
}