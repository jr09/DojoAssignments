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
        type: String
    }
})

module.exports = mongoose.model('Note', noteSchema)