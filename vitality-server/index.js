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

const extraInfoRoute = require('./routes/extra_info.routes');
app.use('/extra_info', extraInfoRoute);

const food_log = require('./routes/food_log.routes');
app.use('/foodLog', food_log);

const video_routines_route = require('./routes/video_routines.route');
app.use('/video_routines', video_routines_route);

const running_session_route = require('./routes/running_log_session.route');
app.use('/running_session', running_session_route);

const challenge_route = require('./routes/challenge.routes');
app.use('/challenge_route', challenge_route);

const friends_route = require('./routes/friends.routes');
app.use('/friends_route', friends_route);

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