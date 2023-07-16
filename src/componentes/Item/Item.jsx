import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={imagen} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>
            {
                //<button className='btnProducto'> Ver Detalles </button>
            }
            <Link to={`/item/${id}`}> Ver Detalles</Link>
        </div>
    )
}

export default Item
            
