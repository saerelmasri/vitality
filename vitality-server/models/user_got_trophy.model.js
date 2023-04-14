const mongoose = require('mongoose');

const user_got_trophy_schema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    trophy_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trophy',
        required: true
    },
    achievedAt: {
        type: Date,
        default: Date.now,
        immutable: true
    }
}, { timestamps: true});

const UserTrophy = mongoose.model('UserTrophy', user_got_trophy_schema);
module.exports = UserTrophy
