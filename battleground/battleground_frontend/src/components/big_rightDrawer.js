import { Opacity } from '@mui/icons-material';
import drawer_img2 from '../assets/images/drawer_img2.png';
import drawer_img3 from '../assets/images/drawer_img3.png';
import { Typography } from '@mui/material';


const BigRightDrawer = ({handleMouseLeave}) => {

    return ( 
        <div className='big_side_box' onMouseLeave={handleMouseLeave}>
            <div className='side_box' >
                <div style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '1vh',
                    display: 'flex',
                }}>   
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" 
                    style={{
                        // marginRight: ".5vh",
                    }}/>

                </div>
                
                <div className='side_side_box'>
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg" 
                    style={{
                        zIndex: "1",
                        position: "relative",
                        height: "4.5vh",
                        marginRight: "1vh",
                    }}/>
                    
                    <div className='inside_box'>
                        <div className='typostyle' >    
                            Squad Join
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='side_box'>
                <div style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '1vh',
                    display: 'flex',
                }}>   
                    
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg" 
                    style={{
                        marginRight: ".5vh",
                    }}/>
                </div>
                
                <div className='side_side_box'>
                    <div style={{
                        width: '2px',
                        height: '4.6vh',
                        backgroundColor: '#23c13a',
                        marginRight: '.3vh',
                    }}>

                    </div>
                    <img src={drawer_img2} 
                    style={{
                        zIndex: "1",
                        position: "relative",
                        height: "4.5vh",
                        marginRight: "1vh",
                    }}/>

                    <div className='inside_box'>
                        <div className='typostyle' >    
                            <div>
                                Mary Jane
                            </div>
                            <div className='status'>
                                Online
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='side_box offline_user'>
                <div style={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '1vh',
                    display: 'flex',
                }}>   
                    <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg" 
                    style={{
                        marginRight: ".5vh",
                    }}/>
                </div>
                
                <div className='side_side_box '>
                    
                    <div style={{
                        width: '2px',
                        height: '4.6vh',
                        backgroundColor: '#fff',
                        marginRight: '.3vh',
                        display:'flex'
                    }}>

                    </div>

                    <img src={drawer_img3}
                    style={{
                        zIndex: "1",
                        position: "relative",
                        height: "4.5vh",
                        marginRight: "1vh",
                    }}/>

                    <div className='inside_box'>
                        <div className='typostyle' >    
                            <div>
                                420
                            </div>
                            <div className='status'>
                                Offline
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}
 
export default BigRightDrawer;