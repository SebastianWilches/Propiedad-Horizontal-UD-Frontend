import React, { useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

import "./formRegistrarResponsable.css";

export default function FormRegistrarResponsable() {
  const [apartamento, setApartamento] = useState("# Apartamento");
  const [persona, setPersona] = useState({
    k_numero: "",
    tipo: "",
    n_nombre: "",
    n_apellido: "",
    o_telefono: "",
    i_genero: "",
  });

  const [responsable, setResponsable] = useState({
    o_email: "",
    es_propietario: "",
    o_tel_trabajo: "",
    o_tel_residencia: "",
  });

  const handlePersona = (e) => {
    setPersona({
      ...persona,
      [e.target.name]: e.target.value,
    });
  };

  const handleResponsable = (e) => {
    setResponsable({
      ...responsable,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendResponsable = (e) => {
    e.preventDefault();
    let responsableCompleto;
    persona.k_numero = Number(persona.k_numero);
    persona.o_telefono = Number(persona.o_telefono);
    if(responsable.es_propietario == 1){
      responsable.es_propietario = true;  
    }else{
      responsable.es_propietario = false;
    }
    responsable.es_propietario = true;
    responsable.o_tel_residencia = Number(responsable.o_tel_residencia);
    responsable.o_tel_trabajo = Number(responsable.o_tel_trabajo);
    responsableCompleto = { persona, responsable, apartamento };
    console.log(responsableCompleto);
    sendResponsable(responsableCompleto);
  };

  const sendResponsable = async (object) => {
    console.log("AQUI ESTA EL OBJETOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
    console.log(object);
    const response = await fetch(
      "http://localhost:8081/persona/save_persona_responsable",
      {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  return (
    <div className="containerFormResponsable">
      <h1>
        Propiedad horizontal <span className="enfasis">UD</span> & Asociados
      </h1>

      <h2>Registrar responsable de un apartamento</h2>
      <p>Apartamento: </p>
      <DropdownList
        value={apartamento}
        onChange={(nextValue) => setApartamento(nextValue)}
        data={[101, 201, 103]}
      />
      <form className="formLogin" onSubmit={handleSendResponsable}>
        <p>Numero de Documento: </p>
        <input
          className="login-input"
          type="text"
          name="k_numero"
          onChange={handlePersona}
        />
        <p>Tipo de Documento: </p>
        <input
          className="login-input"
          type="text"
          name="tipo"
          onChange={handlePersona}
        />
        <p>Nombre: </p>
        <input
          className="login-input"
          type="text"
          name="n_nombre"
          onChange={handlePersona}
        />
        <p>apellido: </p>
        <input
          className="login-input"
          type="text"
          name="n_apellido"
          onChange={handlePersona}
        />
        <p>telefono: </p>
        <input
          className="login-input"
          type="text"
          name="o_telefono"
          onChange={handlePersona}
        />
        <p>genero: </p>
        <input
          className="login-input"
          type="text"
          name="i_genero"
          onChange={handlePersona}
        />
        <p>email: </p>
        <input
          className="login-input"
          type="text"
          name="o_email"
          onChange={handleResponsable}
        />
        <p>Es el propietario: </p>
        <input
          className="login-input"
          type="number"
          name="es_propietario"
          onChange={handleResponsable}
        />
        <p>Telefono del Trabajo: </p>
        <input
          className="login-input"
          type="text"
          name="o_tel_trabajo"
          onChange={handleResponsable}
        />
        <p>Telefono de Residencia: </p>
        <input
          className="login-input"
          type="text"
          name="o_tel_residencia"
          onChange={handleResponsable}
        />
        <button className="login-boton">Registrar</button>
      </form>
    </div>
  );
}
