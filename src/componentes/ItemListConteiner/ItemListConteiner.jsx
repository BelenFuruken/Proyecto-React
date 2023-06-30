import './ItemListConteiner.css';
import { useState, useEffect } from 'react';
import { getProductos, getCategoria } from '../../asyncmoks';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

const ItemListConteiner = ({greeting}) => {
  const [Stock, setStock] = useState([]);

  const {categoria} = useParams();

  useEffect(()=>{
    const funcionProductos = categoria ? getCategoria : getProductos;
    funcionProductos(categoria)
      .then(res => setStock(res))
      .catch(error => console.log(error))
  }, [categoria])

  return (
    <h2> {greering} </h2>
   // <ItemList productos={Stock}/>
  )
}

export default ItemListConteiner