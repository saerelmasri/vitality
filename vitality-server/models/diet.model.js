const mongoose = require('mongoose');

const diet = mongoose.Schema({
    diet_plan: {
        type: String,
        enum: ['Vegatarian', 'Vegan', 'Normal', 'Keto']
    }
});

const Diet = mongoose.model('diet', diet);
module.exports = Diet;