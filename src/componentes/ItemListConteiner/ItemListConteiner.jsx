import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
// import { getProductos, getCategoria } from '../../asyncmoks'
import './ItemListConteiner.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/config'

const ItemListConteiner = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(()=>{
        const misProductos = idCategoria ? query(collection(db, "inventario"), 
        where("categoria", "==", idCategoria)) : collection(db, "inventario");

        getDocs(misProductos)
            .then(resp => {
                const nuevosProductos = resp.docs.map( doc =>{
                    const data = doc.data();
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(e => console.log(e))
    }, [idCategoria])
    return (
        <>
            <h2 style={{ textAlign: "center" }}> BACK TO BASIC </h2>
            <div className='card-items'>
            <ItemList productos={productos}/>     
            </div>
        </>
    )}
    export default ItemListConteiner
    /*
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
    */
    


