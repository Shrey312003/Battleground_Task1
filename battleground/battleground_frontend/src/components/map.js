import {Grid} from '@mui/material'
import img1 from '../assets/images/mapImg1.png'
import img2 from '../assets/images/mapImg2.png'
import img3 from '../assets/images/mapImg3.png'
import img4 from '../assets/images/mapImg4.png'
import img5 from '../assets/images/mapImg5.png'
import img6 from '../assets/images/mapImg6.png'
import img7 from '../assets/images/mapImg7.png'
import img8 from '../assets/images/mapImg8.png'
import { Typography } from '@mui/material';
import {Card,CardMedia,CardContent} from '@mui/material'

const picObj = [
    {
        title : "Conquest Large Dawnbreaker",
        pic : img1
    },
    {
        title : "Conquest Large Propaganda",
        pic : img2
    },
    {
        title : "Conquest Large Operation Locker",
        pic : img3
    },
    {
        title : "Conquest Large Lancnag Dam",
        pic : img4
    },
    {
        title : "Conquest Large Seige of Shanghai",
        pic : img5
    },
    {
        title : "Conquest Large Golmud Railway",
        pic : img6
    },
    {
        title : "Conquest Large Propaganda",
        pic : img7
    },
    {
        title : "Conquest Large Seige of Shanghai",
        pic : img8
    },
]

const cardStyle = {
    width: '100%',
    height: '20vh',
    backgroundColor: 'rgba(16, 16, 16, .5)',
    padding: '0 0 0 0'
}

const Map = () => {
    return ( 
        <div>
            <Grid container spacing = {2}>
                {picObj.map((val)=>(

                    <Grid sx={{paddingRight:"4%", marginTop:"1%"}} md={3} xs={6} s={6}>
                        <Card sx={cardStyle}>
                            <CardMedia
                                sx={{
                                    height: '8vh',
                                    maxWidth: '100%',
                                    // marginLeft: '10%',
                                }}
                                image={val.pic}
                                title="green iguana"
                            />
                            <CardContent>
                            <Typography 
                            sx={{
                                color: '#fff',
                                letterSpacing: '.1vh',
                                textTransform: 'uppercase',
                                marginLeft:'2%',
                                marginRight:'30%',
                                // marginLeft: '2vh',
                                // marginRight: '2vh',
                                fontFamily: 'Rajdhani',
                                lineHeight: '2vh',
                                fontSize: '1.6vh',
                                fontWeight: '700',
                            }}>
                            {val.title}
                            </Typography>
                            
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 
export default Map;