import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>BTB</h1>
        <nav>
            <ul>
                <li>Productos</li>
                <li>Talles</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
    
  )
}

export default NavBar