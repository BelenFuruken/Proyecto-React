import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({id, nombre, precio, imagen, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0); //Estado con la cantidad de productos agregados.
  
  ///USO DEL CARRITO:
  const {agregarProducto} = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => { 
    //Ese parametro se lo paso desde Itemcount (es el contador)
    setAgregarCantidad(cantidad);

    //Creo un objeto con los datos del producto seleccionado
    const item = {id, nombre, precio};
    //Se lo paso a la funcion agregarProducto, para que desde ahi 
    //trabaje con esos datos y lo agregue al carrito.
    agregarProducto(item, cantidad);
  }

  return (
    <>
    <div className='infoProducto'>
      <h2> {nombre}</h2>
      <img className='imgDetalles' src={imagen} alt={nombre} />
      <h3>Precio: {precio}</h3>
      <h3>Id: {id}</h3>
      <p>Descripcion del producto</p>
      {
        //Lógica de montaje y desmontaje del componente:
        //Si  hay cosas agregadas pasa a mostrarse el boton de Terminar Comprar
        //y si todavia no agrego nada que se muestre el contador.

        //Este condicional se dispara desde le ItemCount cuando toca el boton agregar al carrito.
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }
      </div>
    </>
  )
}

export default ItemDetail