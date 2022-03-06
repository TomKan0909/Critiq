
import { Avatar, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import exampleUser from '../../data/exampleUser';
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

    const {sender, content} = props 

    let senderColContent = '';
    let nonSenderColContent = '';

    
    if (sender === exampleUser) {
        senderColContent = content
        viewerMessageStyle['backgroundColor'] = 'pink'
    } else {
        nonSenderColContent = content
        senderMessageStyle['backgroundColor'] = '#FBDB65'
    } 
    
    let nonSenderAvatar, senderAvatar;

    if (nonSenderColContent === '') {
        nonSenderAvatar = null
        senderAvatar = <Avatar marginY={2} src={exampleUser.images[0].img}/>        
    } else {
        nonSenderAvatar = <Avatar src={sender.images[0].img}/>
        senderAvatar = null
    }

    console.log(sender.images[0])

    return (
        <Grid container>
            <Grid item xs={1}
                justify="center"
                alignItems="center">
                    {nonSenderAvatar}
            </Grid>
            <Grid item xs={4}>
                <Typography 
                    marginLeft={3}
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={senderMessageStyle}
                    zeroMinWidth>
                        {nonSenderColContent}
                </Typography> 
            </Grid>
            <Grid item xs={2}></Grid>
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
            <Grid item xs={1}
                marginTop="0.6em">
                    {senderAvatar}
            </Grid>
        </Grid> 
    )
}
export default Message