const express = require('express');
const sequelize = require('./db');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express()

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync();
        app.listen(PORT, () => console.log(`server started on ${PORT}`));  
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
};

app.get('/', function (req, res) {
    res.send("<h2>Online Shop<h2>");  
});

start();