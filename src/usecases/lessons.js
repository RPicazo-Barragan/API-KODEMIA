
const Lessons = require('../models/lessons')

function getAll (){
    return Lessons.find()
}

function create(lessonData){
    return Lessons.create(lessonData)
}

function deletee(lessonId){
    return Lessons.findByIdAndRemove(koderId)
}

function update(lessonId,data){
    return Lessons.findByIdAndUpdate(lessonId,data)
}

module.exports = {
    getAll,
    create,
    update,
    deletee
}

