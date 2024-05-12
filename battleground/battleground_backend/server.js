const express = require('express');

const app = express();


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.listen('8000');

const data = {
    "server_info": 
    {
        "players" : "60/64",
        "ping" : "104 ms",
        "tickrate" : "60 Hz"
    },
    
    "settings" : 
    {
        "Region" : "Europe - de",
        "punkbaster" : "on",
        "fairfight" : "on",
        "password" : "off",
        "preset" : "normal"
    },

    "advanced" : {
        "minimap" : "on",
        "only squad leader spawn" : "off",
        "vehicles" : "on",
        "team balance" : "on",
        "minimap shooting" : "on",
        "hud" : "on",
        "3P vehicle cam" : "on",
        "regenerative health" : "on",
        "kill cam" : "on",
        "friendly fire" : "off",
        "3d spotting" : "on" ,
        "enemy name tags" : "on"
    },

    "rules" : {
        "tickets" : "400",
        "vehicle spawn delay" : "25",
        "bullet damage" : "100",
        "kick after team kills" : "5",
        "player health" : "100",
        "player respawn time" : "100",
        "kick after idle" : "300",
        "ban after kicks" : "3" 
    }
    
}


app.get('/', (req,res) => {
    res.send(data);
});