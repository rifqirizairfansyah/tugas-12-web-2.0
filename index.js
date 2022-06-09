
const express = require('express')
const mysql = require("./database/mysql");
const port = 5002
const bodyParser = require('body-parser')

app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const admin = require('./routes/course')

app.use('/admin', admin)

require('http').createServer();

app.listen(port, function(){
    console.log('Listening on port ' + port);
});

console.log("Connected to server");

module.exports = app;