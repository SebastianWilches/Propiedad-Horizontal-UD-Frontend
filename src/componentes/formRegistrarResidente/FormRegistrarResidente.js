import React, { useState } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/styles.css';

export default function FormRegistrarResidente() {

    const [residenteForm, setResidenteForm] = useState([
        { nombre: '', apellido: '' }
    ])
    const [Apartamento, setApartamento] = useState("# Apartamento");


    const handleFormChange = (index, event) => {
        let data = [...residenteForm];
        data[index][event.target.name] = event.target.value;
        setResidenteForm(data);
    }

    const addFields = () => {
        let inputForm = { name: '', age: '' }

        setResidenteForm([...residenteForm, inputForm])
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(residenteForm)
    }

    const removeFields = (index) => {
        let data = [...residenteForm];
        data.splice(index, 1)
        setResidenteForm(data)
    }

    return (
        <div>
            <p>Apartamento: </p>
            <DropdownList 
                value={Apartamento}
                onChange={(nextValue) => setApartamento(nextValue)}
                data={["101", "201", "301"]}
            />
            <form>
                {residenteForm.map((input, index) => {
                    return (
                        <div key={index}>
                            <p>Nombre:</p>
                            <input
                                name='nombre'
                                type='text'
                                placeholder='Ingrese su nombre'
                                value={input.nombre}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <p>Apellido:</p>
                            <input
                                name='apellido'
                                type='text'
                                placeholder='Ingrese su apellido'
                                value={input.apellido}
                                onChange={event => handleFormChange(index, event)}
                            />
                            <button onClick={() => removeFields(index)}>Remove</button>
                        </div>
                    )
                })}
            </form>
            <button onClick={addFields}>Añadir</button>
            <button onClick={submit}>Enviar</button>
        </div>
    )
}
