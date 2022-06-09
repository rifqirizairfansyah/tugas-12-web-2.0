const mysql = require('mysql');
const util = require('util');
require("dotenv").config();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'tugas12'
  });

connection.query = util.promisify(connection.query).bind(connection);

connection.connect(function(err){
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    };
    console.log("connected as database theread " + connection.threadId);
});

module.exports = {
    connection
  };