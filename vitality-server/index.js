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

const challenge_route = require('./routes/challenge.routes');
app.use('/challenge_route', challenge_route);

const friends_route = require('./routes/friends.routes');
app.use('/friends_route', friends_route);

const competition_route = require('./routes/competition.routes');
app.use('/competition_route', competition_route);

const leaderboard_route = require('./routes/leaderboard.routes');
app.use('/leaderboard_route', leaderboard_route);

const user_route = require('./routes/user_profile.routes');
app.use('/user_route', user_route);

const photos_route = require('./routes/photo.routes');
app.use('/photos_route', photos_route);

const steps_counter_route = require('./routes/step_counter.router');
app.use('/steps_counter_route', steps_counter_route);

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