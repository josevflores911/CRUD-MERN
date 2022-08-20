const express = require('express')
const app = express()

const archivoDb = require('./conexion')

const rutausuario = require('./rutas/usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req,res)=>{
    res.end('Bienvenidos')
})

app.listen(5000,function(){
    console.log('El servidor esta corriendo correctamente')
})