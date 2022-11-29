import axios from 'axios'
import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

function PedidoIndividual({pedido}){

    const navegar = useNavigate()

    //NAVIGATE ANIMATION
    useEffect(() => {
        AOS.init()
    }, [])


    function borrarpedido(idpedido){
        axios.post('/api/pedido/borrarpedido', {idpedido: idpedido}).then(res => {
            console.log(res.data)
            alert(res.data)
            navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <div className='container'>
            <div className='row '>
            
                <div className='col-sm-4 offset-1' data-aos="flip-left">
                    <ul className='list-group'>
                        <li className='list-group-item'>{pedido.idpedido}</li>
                        <li className='list-group-item'>{pedido.nombre}</li>
                        <li className='list-group-item'>{pedido.identidad}</li>
                        <li className='list-group-item'>{pedido.direccion}</li>
                        <li className='list-group-item'>{pedido.paquete}</li>
                        <li className='list-group-item'>{pedido.horario}</li>
                        <li className='list-group-item'>{pedido.direccion2}</li>
                        <li className='list-group-item'>{pedido.identidad2}</li>

                    </ul>
                    <Link to={`/editarpedido/${pedido.idpedido}`}><li className='btn btn-success'>Editar pedido</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borrarpedido(pedido.idpedido)}}>Cancelar pedido</button>
                    <hr className='mt-4'></hr>
                </div>
            </div>
            
        </div>
    )
}

export default PedidoIndividual