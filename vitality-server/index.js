const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const authRoute = require('./routes/auth.routes');
app.use('/auth', authRoute);

const extraInfoRoute = require('./routes/auth.routes');
app.use('/extra_info', extraInfoRoute);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }

    next();
});

app.listen((process.env.PORT) ,(err) => {
    console.log('Listening in port', process.env.PORT);
    require('./config/db.connection');
});