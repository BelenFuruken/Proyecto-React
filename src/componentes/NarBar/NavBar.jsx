import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
        <h1>BTB</h1>
        </Link>
        
        <nav>
            <ul>
                <li>
                  <NavLink to={'/categoria/1'}>Parte Superior</NavLink>
                </li>
                <li>
                  <NavLink to={'/categoria/1'}>Parte inferior</NavLink>
                </li>
            </ul>
            <CartWidget/>
        </nav>
    </header>
    
  )
}

export default NavBar