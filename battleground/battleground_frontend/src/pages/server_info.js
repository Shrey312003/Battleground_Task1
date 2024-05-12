import '../styles/server.css';
import "@fontsource/rajdhani"; // Defaults to weight 400
import BreadNav from '../components/bread_navbar';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Map from '../components/map';
import { Typography } from '@mui/material';
import RightDrawer from '../components/right_drawer';
import ServerName from '../components/server_name';
import JoinInfo from '../components/join_info';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';
import {CircularProgress} from '@mui/material';
import ServerAPI from '../components/server_api';
import LeftMenu from '../components/left_menu';

const ServerInfo = () => {

    const {data, loading, error} = useFetch("http://localhost:8000/");

    // console.log(data);
    return ( 
        <div className="page">
            {(loading) && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <CircularProgress />
                </div>
            )}
            {!loading && error && <div>Error: {error.message}</div>}
            {!loading && data &&
            (
            <Grid container spacing={2}>
                <Grid xs={8}>
                    <LeftMenu />
                    <div className='main-content'>
                        
                        <BreadNav/>
                        
                        <ServerName/>

                        <JoinInfo/>

                        <ServerAPI data={data.data}/>
                        
                        <div sx={{marginTop:"10%"}}>
                            <Typography sx={{
                                color: '#fff',
                                letterSpacing: '.1vh',
                                textTransform: 'uppercase',
                                marginBottom: '1.5vh',
                                fontFamily: 'Rajdhani',
                                fontSize:'1.5vh',
                                fontWeight: '600',
                                lineHeight: '1.8vh',
                            }}>
                                Map Rotation
                            </Typography>
                            <Map/>
                        </div>
                    </div>
                    
                </Grid>
                <Grid xs={4}>
                    <RightDrawer />
                </Grid>
            </Grid>
            )
            }
            
        </div>
    );
}
 
export default ServerInfo;