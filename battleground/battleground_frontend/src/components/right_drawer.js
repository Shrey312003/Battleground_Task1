import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import GroupsIcon from '@mui/icons-material/Groups';
import drawer_img2 from '../assets/images/drawer_img2.png';
import drawer_img3 from '../assets/images/drawer_img3.png';
import { useState } from 'react';
import BigRightDrawer from './big_rightDrawer';


const RightDrawer = () => {

    const [isOpen,setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
        console.log(isOpen);
    }

    const handleMouseLeave = () => {
        setIsOpen(false);
        console.log(isOpen);
    }

    return ( 
        <div >
            {!isOpen && (
            <div className="right-drawer" onMouseEnter= {handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className='side_box' >
                    <div style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: '1vh',
                        display: 'flex',
                    }}>   
                        <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg" 
                        style={{
                            marginRight: ".5vh",
                        }}/>
                    </div>
                    
                    <div style={{
                        justifyContent:'flex-start',
                        alignItems: 'center',
                        display: 'flex',
                    }}>
                        <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg" 
                        style={{
                            zIndex: "1",
                            position: "relative",
                            height: "4.5vh",
                            marginRight: "1vh",
                        }}/>
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
                    
                    <div style={{
                        justifyContent:'flex-start',
                        alignItems: 'center',
                        display: 'flex',
                    }}>
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
                    </div>
                </div>

                <div className='side_box'>
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
                    
                    <div style={{opacity:'0.6'}}>
                        <div style={{
                            justifyContent:'flex-start',
                            alignItems: 'center',
                            display: 'flex',
                        }}>
                        <div style={{
                            width: '2px',
                            height: '4.6vh',
                            backgroundColor: '#fff',
                            marginRight: '.3vh',
                        }}>

                        </div>

                        <img src={drawer_img3}
                        style={{
                            zIndex: "1",
                            position: "relative",
                            height: "4.5vh",
                            marginRight: "1vh",
                        }}/>
                    </div>
                    </div>
                    
                </div>
            </div>
            )
            }

            {isOpen && (
                <BigRightDrawer handleMouseLeave={handleMouseLeave}></BigRightDrawer>
             )} 
        </div>
    );
}
 
export default RightDrawer;