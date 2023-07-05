import React from 'react'
import { useParams} from 'react-router-dom'


const ParteSuperior = () => {
    const {productos} = useParams;

    return (
        <div>
            <h2>Sección Remeras, casacas, hoodies</h2>
            <strong>Artículo buscado: {productos} </strong>
        </div>
    )
}
export default ParteSuperior