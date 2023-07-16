import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductos, getCategoria } from '../../asyncmoks'
import './ItemListConteiner.css'

const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect( () => {
        getProductos()
            .then( resp => {
                setProductos(resp);
            })
            .catch( error => console.log(error))
    }, [])
    useEffect(() => {
        const funcionProductos = idCategoria ? getCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center" }}> Mis productos </h2>
            
            <div className='card-items'>
            <ItemList productos={productos}/>     
            </div>
           
        </>
    )
}

export default ItemListConteiner


    /*
    useEffect(() => {
        const funcionProductos = idCategoria ? getCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])
    */