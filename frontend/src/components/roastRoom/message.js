
import { Avatar, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import exampleUser from '../../data/exampleUser';
const Message = (props) => {


    const nonViewerAvatarStyle = {
        marginTop: "0.6em",
        marginLeft: 3
    }

    const viewerAvatarStyle = {
        marginTop: "0.6em",
        marginRight: 3
    }

    // https://stackoverflow.com/a/17756714
    // https://stackoverflow.com/a/61526114
    const viewerMessageStyle = {
        overflowX : 'hidden',
        overflowWrap: 'break-word',
        borderRadius: 10,
        padding: 1.2,
        marginRight: 3,
        marginY: 1
    }

    const nonViewerMessageStyle = {
        overflowX : 'hidden',
        overflowWrap: 'break-word',
        borderRadius: 10,
        padding: 1.2,
        marginLeft: 3,
        marginY: 1
    }

    const {sender, content} = props 

    let viewerColContent = '';
    let nonViewerColContent = '';

    
    if (sender === exampleUser) {
        viewerColContent = content
        viewerMessageStyle['backgroundColor'] = 'pink'
    } else {
        nonViewerColContent = content
        nonViewerMessageStyle['backgroundColor'] = '#FBDB65'
    } 
    
    let nonViewerAvatar, viewerAvatar;

    if (nonViewerColContent === '') {
        nonViewerAvatar = null
        viewerAvatar = <Avatar sx={viewerAvatarStyle} src={exampleUser.images[0].img}/>        
    } else {
        nonViewerAvatar = <Avatar sx={nonViewerAvatarStyle} src={sender.images[0].img}/>
        viewerAvatar = null
    }


    return (
        <Grid overflowX={'hidden'} container>
            <Grid item xs={1}
                justify="center"
                alignItems="center">
                    {nonViewerAvatar}
            </Grid>
            <Grid item xs={4}>
                <Typography 
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={nonViewerMessageStyle}
                    zeroMinWidth>
                        {nonViewerColContent}
                </Typography> 
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
                <Typography 
                    variant='body1' 
                    marginY={1} 
                    fontSize={'1.2rem'}
                    sx={viewerMessageStyle}
                    zeroMinWidth> 
                        {viewerColContent}
                </Typography> 
            </Grid>
            <Grid item xs={1}>
                    {viewerAvatar}
            </Grid>
        </Grid> 
    )
}
export default Message