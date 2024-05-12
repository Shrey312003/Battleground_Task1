const ServerAPI = ({data}) => {
    console.log(data);

    const settings_arr = Object.entries(data.settings);
    const adv_arr = Object.entries(data.advanced);
    const rul_arr= Object.entries(data.rules);

    return ( 
        <div>
            <div className="server-current">
                <div className="current-stats">
                    <div className="current-head">players</div>
                    <div className="current-body">{data.server_info.players}</div>
                </div>
                <div className="current-stats">
                    <div className="current-head">ping</div>
                    <div className="current-body">{data.server_info.ping}</div>
                </div>
                <div className="current-stats">
                    <div className="current-head">tickrate</div>
                    <div className="current-body">{data.server_info.tickrate}</div>
                </div>
            </div>


            <div className="server__settings-w">

                <div className="server__settings">
                    <div className="server__settings-h">
                        settings
                    </div>

                    {settings_arr.map((arr) => (
                        <div className="server__setting">
                            <div className="server__setting-text">{arr[0]}</div>
                            <div className="server__setting-text">{arr[1]}</div>
                        </div>
                    ))}
                </div>


                <div className="server__settings">
                    <div className="server__settings-h">
                        advanced
                    </div>

                    {adv_arr.map((arr) => (
                        <div className="server__setting">
                            <div className="server__setting-text">{arr[0]}</div>
                            <div className="server__setting-text">{arr[1]}</div>
                        </div>
                    ))}
                </div>


                <div className="server__settings">
                    <div className="server__settings-h">
                        rules
                    </div>

                    {rul_arr.map((arr) => (
                        <div className="server__setting">
                            <div className="server__setting-text">{arr[0]}</div>
                            <div className="server__setting-text">{arr[1]}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
 
export default ServerAPI;