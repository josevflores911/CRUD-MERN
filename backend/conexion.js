const mongoose =require('mongoose');
require('dotenv').config({ path: 'variables.env' });

//mongoose.connect('mongodb+srv://josevflores911:19274746@cluster0.lta12.mongodb.net/MERNproducts');

const objectDb =  mongoose.connection

objectDb.on('connected', ()=>{
    console.log('Conexion correcta a Mongo')
})

objectDb.on('error', ()=>{
    console.log('Erro en conexion a Mongo')
})

module.exports = mongoose
