import { Link } from 'react-router-dom'
import './Item.css'
import { ItemCount } from '../ItemCount/ItemCount'

const Item = ({ id, nombre, precio, imagen, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={imagen} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>    
            <ItemCount stock={stock}/>
            <Link to={`/item/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item
            
