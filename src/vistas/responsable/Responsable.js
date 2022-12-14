import React, { useState, useEffect } from 'react';

import FormRegistrarResponsable from '../../componentes/formRegistrarResponsable/formRegistrarResponsable'

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
            <FormRegistrarResponsable apartamentos={apartamentos}/>
        </div>
    )
}