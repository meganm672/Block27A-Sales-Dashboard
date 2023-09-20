import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

export default function Title(){
    const boxStyle={width:"400px",height: "200px"}
    const titleStyle={textAlign:"center", paddingLeft: "20px"}
    const welcomeStyle={paddingLeft:"80px",  color: '#66CDAA'}
    const sunIconStyle={paddingLeft: "50px", paddingTop: "30px"}
    return(
        <Box style={boxStyle}>
            <WbSunnyOutlinedIcon style={sunIconStyle} />
            <Typography style={titleStyle} variant="h2">Dashboard</Typography>
            <Typography style={welcomeStyle} variant='h6'>Welcome to your dashboard</Typography>
        </Box>
    )
}