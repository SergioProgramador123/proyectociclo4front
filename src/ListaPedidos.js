import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PedidoIndividual from './PedidoIndividual'


function ListaPedidos(){

    const[datapedidos, setdatapedido]=useState([])

    useEffect(() =>{
        axios.get('/api/pedido/obtenerpedidos').then(res => {
            console.log(res.data)
            setdatapedido(res.data)
        }).catch(err =>{
            console.log(err)
        })
        
    }, [])

    //MAPEAR LISTAUSUARIO EN OBJETO USUARIO
    const listapedidos = datapedidos.map(pedido => {
        return(
            <div>
                <PedidoIndividual pedido={pedido}/>
            </div>
        )
    })


    return(
        <div>
            <h2>Informacion de tus pedidos</h2>
            {listapedidos}
        </div>
    )
}

export default ListaPedidos