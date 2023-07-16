import React from 'react'

const ItemDetail = ({id, nombre, precio, image}) => {
  return (
    <>
      <h2>Nombre: {nombre}</h2>
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p>Descripcion del producto</p>
      <img src={image} alt={nombre} />
    </>
  )
}

export default ItemDetail