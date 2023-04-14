const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB
});

connection.connect((err) => {
    if(err) console.log(err);
    console.log('Connection stablished');
});

module.exports = connection;