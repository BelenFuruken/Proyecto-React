import { useState } from "react";
import './ItemCount.css'

export const ItemCount = ({ stock }) => {

    const [stockInicial, setStockInicial] = useState(1);

	const [errorStock, setErrorStock] = useState(false);

	//FUNCION PARA MANEJAR EL AGREGAR O RESTAR CANTIDAD A COMPRAR
	const handleClick = (value) => {
		if (stockInicial + value > 0 && stockInicial + value <= stock) {
			setStockInicial(stockInicial + value);
			setErrorStock(false);
		} else {
			stockInicial + value >= stock && setErrorStock(true);
		}
	};

	return (
		<>
			<div>
				<button onClick={() => handleClick(-1)}>-</button>
				<div>{stockInicial}</div>
				<button onClick={() => handleClick(1)}>+</button>
			</div>
			<button>AGREGAR</button>
			{errorStock && (
				<div>
					Se alcanzo el máximo disponible
				</div>
			)}
		</>
	);
};