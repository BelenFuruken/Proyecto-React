import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen, stock}) => {
  return (
    <>
    <div className='infoProducto'>
      <h2>Nombre: {nombre}</h2>
      <img className='imgDetalles' src={imagen} alt={nombre} />
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p>Descripcion del producto</p>
      
      <ItemCount stock={stock}/>
    </div>

    </>
  )
}

export default ItemDetail