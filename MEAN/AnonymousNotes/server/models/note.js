const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    date: {
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model('Note', noteSchema)