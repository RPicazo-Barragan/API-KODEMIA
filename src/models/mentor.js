
const mongoose = require('mogoose')

const mentorSchema = new mongoose.mentorSchema({
    name:{
        type: String,
        required: true,
        maxlength: 100,
        minlenght: 2
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: [
            'male',
            'female',
            'nombinary'
        ]

    },
    specialty:{
        type: String,
        required: true,
        enum:[
            'frontEnd',
            'backEnd'
        ]
    }
})

module.exports = mongoose.model('mentors',mentorSchema)