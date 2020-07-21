
const express = require('express')

const router = express.Router()

const koder = require('../usecases/koders')

router.post('/sing-up',async (request,response)=>{
    try {
        const signedUpKoder = await koder.signup(request.body)
        response.json({
            success: true,
            data:{
                koder: signedUpKoder
            }
        })
        
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })   
    }    
})

module.exports = router