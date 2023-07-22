import { useState, useEffect } from "react";
// import { getUnProducto } from "../../asyncmoks"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailCounteiner = () => {
  const [Stock, setStock] = useState(null);
  const {id} = useParams();

  useEffect(()=>{
    const nuevoDoc = doc(db, "inventario", id);
    getDoc(nuevoDoc)
      .then(resp => {
        const data = resp.data();
        const nuevoProducto = {id:resp.id, ...data};
        setStock(nuevoProducto);
      })
      .catch(e=> console.log(e))
  }, [id])
  /*
  useEffect(()=>{
    getUnProducto(id)
      .then(res=>setStock(res))
      .catch(error=>console.log(error))
  }, [id])
  */
  return (
    <ItemDetail {...Stock} ></ItemDetail>
    )
}

export default ItemDetailCounteiner 