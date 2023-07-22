import { useState } from "react";
import { createContext } from "react";

//Creamos el objeto que contiene la informacion de los productos que se seleccionan en el carrito.
export const CarritoContext = createContext({
    carrito: [],
    cantidad: 0,
    total: 0
})

//Creamos el COMPONENTE que va a manejar el carrito y va a devolver el carrito.
export const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([]); //Estado para almacenar el carrito de compras
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setcantidadTotal] = useState(0);
    console.log(carrito);

    //FUNCIONES PARA MANEJAR EL CARRITO (pide la consigna):
    const agregarProducto = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id); 
        //devuelve el elemento si lo encuentra y sino devuelve un false
        if (!productoExistente){
            setCarrito(prev => [...prev, {item, cantidad}]) 
            // si no se encuentra que ese producto ya existe, se va a mandar al estado carrito 
            // (cambiando su estado con el setCarrito) el carrito anterior ya existente (prev) y
            // ademas se le manda el objeto con el nuevo item y la canidad del mismo.
            setcantidadTotal(prev => prev + cantidad); //suma la cantidad de productos que seleccione.
            setTotal(prev => prev + (item.precio * cantidad)); // sumo el precio total de lo que seleccione.
        }else{ //si EXISTE ese producto ya seleccionado, solo hay que incrementar su cantidad en el array ya existente de carrito.
            const carritoActualizado = carrito.map( prod =>{
                if(prod.item.id === item.id){
                    return{...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod;
                }
            })
            setCarrito(carritoActualizado);
            setTotal(prev => prev + (prev.precio * cantidad));
            setcantidadTotal(prev => prev + cantidad);
        }
    }

    const eliminarProducto = (id) =>{
        const productoEliminado = carrito.find( prod => prod.item.id === id); //devuelve el producto q se quiere eliminar
        const carritoActualizado = carrito.filter( prod => prod.item.id !== id);//guarda el carrito, sacando el que se quiere eliminar
        setCarrito(carritoActualizado);
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
        setcantidadTotal(prev => prev - productoEliminado.cantidad);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setcantidadTotal(0);
    }
    
    //DEFINIMOS EL RETORNO DEL COMPONENTE:
    return(
        <CarritoContext.Provider value={{carrito, total, cantidadTotal, agregarProducto, eliminarProducto, vaciarCarrito}}>
            {children}
        </CarritoContext.Provider>
    ) 
}
