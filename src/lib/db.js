
const mongoose = require('mongoose')

function connect (){
    return mongoose.connect('mongodb+srv://RPicazo:Pikachu2020@kluster-barragan.olhyc.mongodb.net/kodemia',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
}

module.exports = connect