
const express = require('express')

const router = express.Router()
const lessons = require('../usecases/lessons')
const koders = require('../usecases/koders')

router.get('/',async (request,response)=>{
    try {
        const allLessons = await lessons.getAll()

        response.json({
            success: true,
            data:{
                allLessons
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

router.post('/',async(request,response)=>{
    try {
        const newLessonsData = request.body
        const newLesson = await lessons.create(newLessonsData)
        response.json({
            success: true,
            data:{
                newLesson
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
        const lessonToDelete = await lessons.deletee(id)
        response.json({
            success: true,
            data:{
                lessonToDelete
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
        const lessontoUpdate = await lessons.update(id,dataToUpdate)
        response.json({
            success: true,
            data: {
                lessontoUpdate
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