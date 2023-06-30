import React from 'react'
import { Link } from 'react-router-dom'
import { Stock } from '../../asyncmoks'

const Item = () => {
  return (
    <div>
        <h2>TODOS LOS PRODUCTOS</h2>
        <ul>
            {
                Stock.map((producto, index)=>{
                    <li key={index}>
                        <p>{producto.nombre}</p>
                        <p>{producto.precio}</p>
                        <img src={producto.imagen} alt="" />
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Item