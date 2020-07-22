
// funciones
//las acciones que el usuario puede ejercer en el sistema

const Koders = require('../models/koder')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')


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

async function login(email,passwordPlain){
    const koderByEmail = await Koders.findOne({ email })
    if (!koderByEmail){
        //se ejecuta cuando no encuentra coicidencias
        throw new Error('Email not found')
    }

    //verificar que sea el password correcto
    const isValid = await bcrypt.compare(passwordPlain, koderByEmail.password)
    if(!isValid){
        throw new Error('Wrong password')
    }
     //crear token
    
     return jwt.sign({ id: koderByEmail._id })
}

module.exports = {
    getAll,
    create,
    deletee,
    update,
    signup,
    login
}