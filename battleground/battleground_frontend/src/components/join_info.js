const JoinInfo = () => {
    return ( 
        <div className="server_buttons-w">
            <div className="server_button">
                <div className="server_button-text">
                    Join
                </div>
                
            </div>
            <div className="server_button">
                <div className="server_button-text">
                    spectate
                </div>
               
            </div>
            <div className="server_button">
                <div className="server_button-text">
                    join as commander   
                </div>
                
            </div>
            <div className="server_button server_button-favourite">

                <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b8ba5feb6d6e9bb7f6_favorites%20-%20black.svg" loading="lazy" alt="" class="server__favorite server__favorite--black" />

                <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg" loading="lazy" alt="" class="server__favorite server__favorite--white"  />
                <div className="server_button-text">
                    13672   
                </div>
                
            </div>  
        </div>
    );
}
 
export default JoinInfo;