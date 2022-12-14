import React, { useState, useEffect } from 'react';

import FormRegistrarResidente from '../../componentes/formRegistrarResidente/FormRegistrarResidente'

export default function Responsable() {
    const [apartamentos, setApartamentos] = useState([]);

    useEffect(() => {
        GETApartamento();
    }, [])

    const GETApartamento = async () => {
        const response = await fetch('http://localhost:8081/apartamento/findAll');
        const data = await response.json();
        
        setApartamentos(data);
    }

    return (
        <div>
            <FormRegistrarResidente apartamentos={apartamentos}/>
        </div>
    )
}
