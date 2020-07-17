
const express = require('express')

const router = express.Router()

const mentors = require('../usecases/mentors')


router.get('/', async (request,response)=>{
    try {
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            data: {
                mentors: allMentors
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

router.post('/', async (request,response)=>{
    try {
        const newMentorData = request.body
        const newMentor = await mentors.create(newMentorData)
        response.json({
            success: true,
            data: {
                newMentor
            },
            message:'Mentor creado correctamente'
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
        const mentorToDelete = await mentors.deletee(id)
        response.json({
            success: true,
            data:{
                mentorToDelete
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
        const mentorUpdated = await mentors.update(id,dataToUpdate)
        response.json({
            success: true,
            data: {
                mentorUpdated
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