import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
    const imgCarrito= "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png";
    
    const {cantidadTotal} = useContext(CarritoContext);

    return (
        <div>
            <Link to="/Cart">
                <img src={imgCarrito} alt="" />
                {
                    cantidadTotal > 0 ? <strong style={{color: 'white'}}>{cantidadTotal}</strong> : <strong style={{color: 'white'}}>{0}</strong>
                }
            </Link>
        </div>   
    )
}

export default CartWidget