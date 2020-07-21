const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')
const authRouter = require('./routes/auth')


app.use(express.json())

//app.use(function(request,response,next))
app.use((request,response,next)=>{
    console.log('Middleware de aplicacion')
    next()
})


app.use((request,response,next)=>{
    console.log('Middleware2')
    request.ricciardo = 'hola soy ricciardo'
    next()
})

app.use((request,response,next)=>{
    console.log('Middleware3',request.ricciardo)
    next()
})

//montando el router
app.use('/koders',kodersRouter)
app.use('/mentors',mentorsRouter)
app.use('/auth',authRouter)

app.get('/',(request,response)=>{
    response.json({
        succes: true,
        message:'kodemia APIv8'
    })
})

module.exports = app