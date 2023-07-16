import React from 'react'
import {useParams} from 'react-router-dom'


const ParteSuperior = () => {
    const {id} = useParams();

    return (
        <div>
            <h2>Parte Superior</h2>
            <strong>Artículo buscado: {id} </strong>
        </div>
    )
}

export default ParteSuperior