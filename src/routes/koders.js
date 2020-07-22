
const express = require('express')

const router = express.Router()
// un router es un conjuto de rutas o subconjuto de rutas 
// funciona basicamnet como lo hace app
const koders = require('../usecases/koders')
const auth = require('../middlewares/auth')

router.use((request,response,next)=>{
    console.log('A nivel router: ',request.ricciardo),
    next()
},(request,response,next)=>{
    console.log('middleWare router 2')
    next()
})

router.get('/',(request,response,next)=>{
console.log('middleware de endpoint')
next()
},
async (request,response)=>{
   
    try {
        const allkoders = await koders.getAll()

        response.json({
            success: true,
            data :{
                koders: allkoders
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success:false,
            error: error.message
        })
    }
 
})

router.post('/', auth ,async (request,response)=>{
    try {
        console.log('koder: ',request.koder)
        const newKoderData = request.body
        const newKoder =await koders.create(newKoderData)
        response.json({
            success: true,
            data:{
                newKoder
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }

})

router.delete('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const koderToDelete = await koders.deletee(id)
        response.json({
            success: true,
            data:{
                koderToDelete
            },
            message:'Se ha borrado correctamente'
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.patch('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const dataToUpdate = request.body
        const koderUpdated = await koders.update(id,dataToUpdate)
        response.json({
            success: true,
            data: {
                koderUpdated
            },
            message: 'Se ha actualizado con exito'
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router