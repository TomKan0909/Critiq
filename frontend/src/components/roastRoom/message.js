
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
const Message = (props) => {

    // https://stackoverflow.com/a/17756714
    // https://stackoverflow.com/a/61526114
    const viewerMessageStyle = {
        overflowX : 'hidden',
        overflowWrap: 'break-word',
        borderRadius: 10,
        padding: 1.2,
    }

    const senderMessageStyle = {
        overflowX : 'hidden',
        overflowWrap: 'break-word',
        borderRadius: 10,
        padding: 1.2,
    }

    const {sender, viewer, content} = props 

    let senderColContent = '';
    let nonSenderColContent = '';

    
    if (sender === viewer) {
        senderColContent = content
        viewerMessageStyle['backgroundColor'] = 'pink'
    } else {
        nonSenderColContent = content
        senderMessageStyle['backgroundColor'] = '#FBDB65'
    }  

    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography 
                    variant='body1'
                    marginLeft={3}
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={senderMessageStyle}
                    zeroMinWidth>
                        {nonSenderColContent}
                </Typography> 
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Typography 
                    variant='body1' 
                    marginRight={3} 
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={viewerMessageStyle}
                    zeroMinWidth> 
                        {senderColContent}
                </Typography> 
            </Grid>
        </Grid> 
    )
}
export default Message