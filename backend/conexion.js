const mongoose =require('mongoose');
mongoose.connect('localhost');

const objectDb =  mongoose.connection

objectDb.on('connected', ()=>{
    console.log('Conexion correcta a Mongo')
})

objectDb.on('error', ()=>{
    console.log('Erro en conexion a Mongo')
})

module.exports = mongoose
