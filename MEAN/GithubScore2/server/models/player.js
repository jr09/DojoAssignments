const mongoose = require('mongoose');
const { Schema } = mongoose;
const playerSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: 3
    },
    avatar: {
        type: String
    },
    score: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Player', playerSchema);