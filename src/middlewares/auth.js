
const jwt = require('../lib/jwt')
const Koder = require('../models/koder')

async function auth (request,response,next){
    try {
            //todas las llamadas deberian de tener un header Authorization con un token valido
    const { authorization } = request.headers
    console.log('auth: ',authorization)
    const decodedToken = jwt.verify(authorization)
    console.log('decoded Token:', decodedToken)
    const koder = await Koder.findById(decodedToken.id)
    request.koder = koder
    next()  
    } catch (error) {
            response.json({
                success: false,
                error: error.message
            })
    }

}

module.exports = auth