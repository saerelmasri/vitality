const mongoose = require('mongoose');

const trophySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    trophy_img_url: {
        type: String,
        required: true
    }
});

const Trophy = mongoose.model('Trophy', trophySchema);
module.exports = Trophy