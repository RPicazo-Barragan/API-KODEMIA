const express = require('express')

const app = express()

const kodersRouter = require('./routes/koders')
const mentorsRouter = require('./routes/mentors')


app.use(express.json())

//montando el router
app.use('/koders',kodersRouter)
app.use('/mentors',mentorsRouter)

app.get('/',(request,response)=>{
    response.json({
        succes: true,
        message:'kodemia APIv8'
    })
})

module.exports = app