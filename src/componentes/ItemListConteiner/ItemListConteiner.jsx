import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductos, getCategoria } from '../../asyncmoks'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center" }}> Mis productos </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer