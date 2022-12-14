import React, { useState, useEffect } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import 'react-widgets/styles.css';

import './formRegistrarResidente.css';

export default function FormRegistrarResidente({ apartamentos }) {

    const [residenteForm, setResidenteForm] = useState([
        { k_numero: '', tipo: '', n_nombre: '', n_apellido: '', o_telefono: '', i_genero: '' }
    ])
    const [AptoDropdown, setAptoDropdown] = useState("# Apartamento");




    const handleFormChange = (index, event) => {
        let data = [...residenteForm];
        data[index][event.target.name] = event.target.value;
        setResidenteForm(data);
    }

    const addFields = () => {
        let inputForm = { k_numero: '', tipo: '', n_nombre: '', n_apellido: '', o_telefono: '', i_genero: '' }

        setResidenteForm([...residenteForm, inputForm])
    }

    const submit = (e) => {
        e.preventDefault();

        residenteForm.forEach(element => {
            element.k_numero = Number(element.k_numero);
            element.o_telefono = Number(element.o_telefono);
        });

        const postResidentes = {
            residentes: residenteForm,
            k_apartamento: AptoDropdown
        }

        console.log(postResidentes)
        POSTResidente(postResidentes);
    }

    const removeFields = (index) => {
        let data = [...residenteForm];
        data.splice(index, 1)
        setResidenteForm(data)
    }

    const POSTResidente = async (object) => {
        const url = 'http://localhost:8081/persona/save_persona_residente'
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
    }

    return (
        <div className='containerForm'>
            <h1>Propiedad horizontal <span className='enfasis'>UD</span> & Asociados</h1>

            <h2>Registrar residentes de un apartamento</h2>
            <p>Apartamento: </p>
            <DropdownList
                dataKey="k_APARTAMENTO"
                textField="k_APARTAMENTO"
                value={AptoDropdown}
                onChange={(nextValue) => setAptoDropdown(nextValue.k_APARTAMENTO)}
                data={apartamentos}
            />
            <hr></hr>

            <form>
                {residenteForm.map((input, index) => {
                    return (
                        <div className='flex diferenteRegistro'>
                            <h4 className='indice'>#{index + 1}</h4>
                            <div className='registoResidente' key={index}>
                                <div className='inputResidente'>
                                    <p>Número de documento:</p>
                                    <input
                                        name='k_numero'
                                        type='text'
                                        placeholder='Ingrese su número de documento'
                                        value={input.k_numero}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className='inputResidente'>
                                    <p>Tipo de documento:</p>
                                    <input
                                        name='tipo'
                                        type='text'
                                        placeholder='Ingrese su tipo de documento'
                                        value={input.tipo}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className='inputResidente'>
                                    <p>Nombre:</p>
                                    <input
                                        name='n_nombre'
                                        type='text'
                                        placeholder='Ingrese su nombre'
                                        value={input.n_nombre}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className='inputResidente'>
                                    <p>Apellido:</p>
                                    <input
                                        name='n_apellido'
                                        type='text'
                                        placeholder='Ingrese su apellido'
                                        value={input.n_apellido}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className='inputResidente'>
                                    <p>Teléfono:</p>
                                    <input
                                        name='o_telefono'
                                        type='text'
                                        placeholder='Ingrese su teléfono'
                                        value={input.o_telefono}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>
                                <div className='inputResidente'>
                                    <p>Género:</p>
                                    <input
                                        name='i_genero'
                                        type='text'
                                        placeholder='Ingrese su género'
                                        value={input.i_genero}
                                        onChange={event => handleFormChange(index, event)}
                                    />
                                </div>

                            </div>
                            <button onClick={() => removeFields(index)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="10" y1="11" x2="10" y2="17" />
                                <line x1="14" y1="11" x2="14" y2="17" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg></button>
                        </div>
                    )
                })}
            </form>
            <button className='botonAñadir' onClick={addFields}>Añadir</button>
            <button className='botonEnviar' onClick={submit}>Enviar</button>
        </div>
    )
}
