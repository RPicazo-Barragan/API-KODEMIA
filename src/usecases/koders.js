
// funciones
//las acciones que el usuario puede ejercer en el sistema

const Koders = require('../models/koder')
const koder = require('../models/koder')

function getAll (){
    return Koders.find()
}

function create(koderData){
    return Koders.create(koderData)
}

function deletee(koderId){
    return Koders.findByIdAndRemove(koderId)
}

module.exports = {
    getAll,
    create,
    deletee 
}