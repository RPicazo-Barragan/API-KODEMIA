

const mongoose = require('mongoose')

const lessonSchema = new mongoose.Schema({
    topic:{
        type: String,
        required: true,
        maxlength: 50,
        minlength: 2
    },
    duration: {
        type: Number,
        required: true,
    },
    mentor: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('lessons',lessonSchema)