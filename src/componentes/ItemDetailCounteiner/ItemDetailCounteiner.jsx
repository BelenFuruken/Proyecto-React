import { useState, useEffect } from "react"
import { getUnProducto } from "../../asyncmoks"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailCounteiner = () => {
  const [Stock, setStock] = useState(null);
  const {id} = useParams();
  useEffect(()=>{
    getUnProducto(id)
      .then(res=>setStock(res))
      .catch(error=>console.log(error))
  }, [id])
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail