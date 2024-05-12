import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from '@mui/material';
import {Typography} from '@mui/material';
import '../styles/server.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const breadStyle = {
    color:"white",
    letterSpacing: '.1vh',
    textTransform: 'uppercase',
    marginBottom: '.3vh',
    marginRight: '1.5vh',
    fontFamily: 'Rajdhani',
    fontSize: '1.5vh',
    fontWeight: '600',
    lineHeight: '2vh',
    textDecoration: 'none',
    transition: 'opacity'
}

const typoStyle = {
    color:"white",
    fontFamily: 'Rajdhani',
    fontSize: '4vh',
    fontWeight: '600',
    lineHeight: '4vh',
}

const BreadNav = () => {
    return ( 
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <ArrowBackIosNewOutlinedIcon sx={{marginRight:"8.97px"}}/>
            <Breadcrumbs aria-label="breadcrumb" sx={breadStyle}>
                <Link underline="hover" color="inherit" href="/">
                    MULTIPLAYER
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    SERVER BROWSER 
                </Link>
                <Typography></Typography>
                
            </Breadcrumbs>
            </div>
            
            <Typography sx={typoStyle}>
                SERVER INFO
            </Typography>
            
        </div>
    );
}
 
export default BreadNav;
