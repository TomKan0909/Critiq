
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
const Message = (props) => {

    // https://stackoverflow.com/a/17756714
    // https://stackoverflow.com/a/61526114
    const messageStyle = {
        overflowX : 'hidden',
        overflowWrap: 'break-word'
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
                <Typography 
                    align='left' 
                    variant='body1'
                    marginLeft={3}
                    marginY={1} 
                    fontSize={'1.2rem'}
                    flexWrap='wrap'>
                        {nonSenderColContent}
                </Typography> 
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Typography 
                    align='right' 
                    variant='body1' 
                    marginRight={3} 
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={messageStyle}
                    zeroMinWidth> 
                        {senderColContent}
                </Typography> 
            </Grid>
        </Grid> 
    )
}
export default Message