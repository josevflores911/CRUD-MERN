import React,{useState} from "react";
import uniqid from 'uniqid'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

function AgregarUsuario(){

    const navegar = useNavigate()
    //hooks
    const[nombre,setNombre]=useState('')
    const[email,setEmail]=useState('')
    const[telefono,setTelefono]=useState('')

    function agregarUsuario(){
        var usuario = {
            nombre:nombre,
            email:email,
            telefono:telefono,
            idusuario:uniqid()
        }

        console.log(usuario)

        axios.post('/api/usuario/agregarusuario',usuario)
        .then((res)=>{
            //alert(res.data)
            Swal.fire('Felicidades', 'El usuario se creo con exito')
            //navegar(0)
            
        }).catch((err)=>{
            console.log(err)
        })

        console.log("usuario")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <h2 className="mt-4">Crear un nuevo usuario</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarUsuario