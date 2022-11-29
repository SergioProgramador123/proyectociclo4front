import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import uniquid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarPedido(){


    //HOOKS
    const[nombre, setNombre]=useState('')
    const[identidad, setIdentidad]=useState('')
    const[direccion, setDireccion]=useState('')
    const[paquete, setPaquete]=useState('')
    const[horario, setHorario]=useState('')
    const[direccion2, setDireccion2]=useState('')
    const[nombre2, setNombre2]=useState('')
    const[identidad2, setIdentidad2]=useState('')
   

    const navegar = useNavigate()

    function agregarPedido(){
        var pedido = {
            nombre: nombre,
            identidad: identidad,
            direccion: direccion,
            paquete: paquete,
            horario: horario,
            direccion2: direccion2,
            nombre2: nombre2,
            identidad2: identidad2,
            idpedido: uniquid()
        }
        console.log(pedido)

        axios.post('/api/pedido/agregarpedido', pedido)
        .then(res => {
            Swal.fire('Felicitaciones', "Pedido correctamente agregado")
            navegar('/listapedidos')
        })
        .then(err =>{
            console.log(err)
        })
    }


    return(
        <div className="container">
            <div className="row">
                    <h2 className="mt-4">Haz un nuevo pedido</h2>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor='nombre' className='form-label'>Nombre</label>
                        <input type="text" placeholder='Dijita tu nombre aqui'
                        className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='identidad' className='form-label'>Numero de identificacion</label>
                        <input type="numbre" placeholder='Dijita tu numero de documento aqui'
                        className="form-control" value={identidad} onChange={(e) => {setIdentidad(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='direccion' className='form-label'>Direccion y ciudad</label>
                        <input type="text" placeholder='Ejemplo: Calle 60 sur #20-40, Bogota'
                        className="form-control" value={direccion}  onChange={(e) => {setDireccion(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='paquete' className='form-label'>Especificaciones del paquete</label>
                        <input type="text" placeholder='Ancho, alto y peso aprox...Especificar si es delicado'
                        className="form-control" value={paquete} onChange={(e) => {setPaquete(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='horario' className='form-label'>Franja horaria para recoger el paquete</label>
                        <input type="date" placeholder='Cuando estas libre para recoger el paquete?'
                        className="form-control" value={horario} onChange={(e) => {setHorario(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='direccion2' className='form-label'><b>Direccion y ciudad de entrega</b></label>
                        <input type="text" className="form-control" value={direccion2} onChange={(e) => {setDireccion2(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='nombre2' className='form-label'><b>Nombre de la persona que recibe</b></label>
                        <input type="text" className="form-control" value={nombre2}  onChange={(e) => {setNombre2(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor='identidad2' className='form-label'><b>Numero de identificacion de la persona que recibe</b></label>
                        <input type="number" className="form-control" value={identidad2} onChange={(e) => {setIdentidad2(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarPedido} className='btn btn-success'>Hacer pedido</button>
                </div>
            </div>
            
        </div>
    )
}

export default AgregarPedido