const mongoose = require('mongoose');

const goal = mongoose.Schema({
    type: {
        type: String,
        enum: ['Lose Weight', 'Maintain Weight', 'Gain Weight', 'Gain Muscle']
    }
});

const Goal = mongoose.model('Goal', goal);
module.exports = Goal;
