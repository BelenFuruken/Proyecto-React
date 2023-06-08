import './CartWidget.css';

const CartWidget = () => {
    const imgCarrito= "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png";
    return (
        <div>
            <img src={imgCarrito} alt="" />
            <strong>10</strong>
        </div>   
    )
}

export default CartWidget