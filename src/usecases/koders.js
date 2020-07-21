
// funciones
//las acciones que el usuario puede ejercer en el sistema

const Koders = require('../models/koder')
const bcrypt = require('../lib/bcrypt')


function getAll (){
    return Koders.find()
}

function create(koderData){
    return Koders.create(koderData)
}

function deletee(koderId){
    return Koders.findByIdAndRemove(koderId)
}

function update(koderId,dataToUpdate){
    return Koders.findByIdAndUpdate(koderId,dataToUpdate)
}

async function signup (koderData) {

    const { password } = koderData

    //encriptar contraseña
    const passwordEncripted = await bcrypt.hash(password)

    return Koders.create({
        ... koderData,
        password: passwordEncripted
    })
}

module.exports = {
    getAll,
    create,
    deletee,
    update,
    signup
}