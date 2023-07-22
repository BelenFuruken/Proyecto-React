import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

	const [errorStock, setErrorStock] = useState(false);

	const incrementar = () =>{
		if (contador < stock){
			setContador(contador + 1);
		}else{
			setErrorStock(true);
		}
	}
	const decrementar = () =>{
		if (contador > inicial){
			setContador(contador -1);	
		}else {
			setErrorStock(true);
		}
	}

	return (
		<>
			<div>
				<button onClick={decrementar}>-</button>
				<div className="numeroContador">{contador}</div>
				<button onClick={incrementar}>+</button>
			</div>
			{errorStock && (
				<div>
					Se alcanzo el máximo disponible
				</div>
			)}
			<button onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button>
		</>
	);
};