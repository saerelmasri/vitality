const mongoose = require('mongoose');

const activity = mongoose.Schema({
    activity_type: {
        type: String,
        enum: ['Not Very Active', 'Lightly Active', 'Active', 'Very Active']
    }
});

const Activity = mongoose.model('activity', activity);
module.exports = Activity