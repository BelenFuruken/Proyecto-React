import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({id, nombre, precio, image, stock}) => {
  return (
    <>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p>Descripcion del producto</p>
      <img src={image} alt={nombre} />
      <ItemCount stock={stock}/>
    </>
  )
}

export default ItemDetail