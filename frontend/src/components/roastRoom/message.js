
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
const Message = (props) => {

    const messageStyle = {
    }

    const {sender, viewer, content} = props 

    let senderColContent;
    let nonSenderColContent;

    
    if (sender === viewer) {
        senderColContent = content
    } else {
        nonSenderColContent = content
    }  

    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography align='left' variant='body1' marginLeft={3} marginY={1} fontSize={'1.2rem'}>
                    {nonSenderColContent}
                </Typography> 
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Typography align='right' variant='body1' marginRight={3} marginY={1} fontSize={'1.2rem'}> 
                    {senderColContent}
                </Typography> 
            </Grid>
        </Grid> 
    )
}
export default Message