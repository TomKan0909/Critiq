
import { TableRow, TableCell } from '@mui/material';
const Message = (props) => {

    const {sender, viewer, content} = props 

    console.log(props)

    let senderColContent;
    let nonSenderColContent;

    
    if (sender === viewer) {
        senderColContent = content
    } else {
        nonSenderColContent = content
    }  

    return (
        <TableRow>
            <TableCell align='left'>{nonSenderColContent}</TableCell>
            <TableCell></TableCell>
            <TableCell align='right'>{senderColContent}</TableCell>
        </TableRow> 
    )
}
export default Message