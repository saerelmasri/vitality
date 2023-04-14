const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        validate: {
            validator: function (v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlenght: 8,
        maxlenght: 32,
        validate: {
        validator: function(v) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,32}$/.test(v);
        },
            message: 'Password must be at least 8 characters, and contain at least one uppercase letter, one lowercase letter, and one number'
        }
    },
    phone_number: {
        type: String,
        required: [true, 'Please enter your phone number'],
        unique: true,
        validate: {
            validator: function (value) {
              const phoneRegex = /^[0-9]{10}$/;
              return phoneRegex.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    level: {
        type: Number,
        default: 0
    }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);
module.exports = User