import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ id, nombre, precio, imagen, stock }) => {
    return (
        <div className='cardProducto'>
            <img className='imgProducto' src={imagen} alt={nombre} />
            <h3>Nombre: {nombre} </h3>
            <p>Precio: {precio} </p>
            <p>ID: {id} </p>    
            <Link to={`/item/${id}`}> 
                <h4 className='VerDetalles'>Ver Detalles</h4>
            </Link>
        </div>
    )
}

export default Item
            
