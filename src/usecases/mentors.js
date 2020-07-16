
const Mentors = require('../models/mentor')
const mentor = require('../models/mentor')

function getAll(){
    return Mentors.find()
}

function create(mentorData){
    return Mentors.create(mentorData)
}

function deletee(mentorId){
    return Mentors.findByIdAndRemove(mentorId)
}

function update(mentorId,dataToUpdate){
    return Mentors.findByIdAndUpdate(mentorId,dataToUpdate)
}

module.exports = {
    getAll,
    create,
    deletee,
    update
}