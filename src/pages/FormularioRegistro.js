import React, { useState } from "react";
import Menu from "../Menu";

const FormularioRegistro = () => {
  const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = e.target.usuario.value;

    const nombres = e.target.nombres.value;

    const correo = e.target.correo.value;

    const dni = e.target.dni.value;

    const telefono = e.target.telefono.value;

    const tos = e.target.tos.checked;

    if (!/^\d{1,3}j$/.test(usuario)) {
      alert(
        'El usuario debe comenzar con números, terminar con la letra "j" y tener un máximo de 4 caracteres'
      );
      return;
    }

    if (!/^[A-Z\s]{1,200}$/.test(nombres)) {
      alert(
        "Los nombres deben estar en mayúsculas y tener entre 1 y 200 caracteres"
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert("Ingrese un correo válido");
      return;
    }

    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener 8 dígitos");
      return;
    }

    if (
      (telefono.length !== 7 && telefono.length !== 9) ||
      (telefono.length === 7 && !/^[23456]/.test(telefono)) ||
      (telefono.length === 9 && !/^9/.test(telefono))
    ) {
      alert(
        "El teléfono debe tener 7 dígitos y comenzar con 2, 3, 4, 5 o 6, o tener 9 dígitos y comenzar con 9."
      );
      return;
    }

    if (!tos) {
      alert("Debe aceptar los términos y condiciones del servicio");
      return;
    }

    alert("Gracias por registrarte");
    setRegistrado(true);
  };

  return (
    <div className="main">
      {registrado ? (
        <Menu />
      ) : (
        <div className="container2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="iusuario">Usuario : </label>
              <input
                type="text"
                className="form-control"
                id="iusuario"
                name="usuario"
                placeholder="Ingrese usuario"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inombres">Nombres : </label>
              <input
                type="text"
                className="form-control"
                id="inombres"
                name="nombres"
                placeholder="Ingrese nombres"
              />
            </div>
            <div className="form-group">
              <label htmlFor="icorreo">Correo : </label>
              <input
                type="text"
                className="form-control"
                id="icorreo"
                name="correo"
                placeholder="Ingrese correo"
              />
            </div>
            <div className="form-group">
              <label htmlFor="idni">DNI : </label>
              <input
                type="text"
                className="form-control"
                id="idni"
                name="dni"
                placeholder="Ingrese DNI"
              />
            </div>
            <div className="form-group">
              <label htmlFor="itelefono">Telefono : </label>
              <input
                type="text"
                className="form-control"
                id="itelefono"
                name="telefono"
                placeholder="Ingrese teléfono (7 a 9 digítos)"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="itos"
                name="tos"
              />
              <label htmlFor="itos" className="form-check-label">
                Acepto Terminos y condiciones del servicio
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
const Informes = () => {
  const [registrado, setRegistrado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = e.target.usuario.value;

    const nombres = e.target.nombres.value;

    const correo = e.target.correo.value;

    const dni = e.target.dni.value;

    const telefono = e.target.telefono.value;

    const tos = e.target.tos.checked;

    if (!/^\d{1,3}j$/.test(usuario)) {
      alert(
        'El usuario debe comenzar con números, terminar con la letra "j" y tener un máximo de 4 caracteres'
      );
      return;
    }

    if (!/^[A-Z\s]{1,200}$/.test(nombres)) {
      alert(
        "Los nombres deben estar en mayúsculas y tener entre 1 y 200 caracteres"
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert("Ingrese un correo válido");
      return;
    }

    if (!/^\d{8}$/.test(dni)) {
      alert("El DNI debe tener 8 dígitos");
      return;
    }

    if (
      (telefono.length !== 7 && telefono.length !== 9) ||
      (telefono.length === 7 && !/^[23456]/.test(telefono)) ||
      (telefono.length === 9 && !/^9/.test(telefono))
    ) {
      alert(
        "El teléfono debe tener 7 dígitos y comenzar con 2, 3, 4, 5 o 6, o tener 9 dígitos y comenzar con 9."
      );
      return;
    }

    if (!tos) {
      alert("Debe aceptar los términos y condiciones del servicio");
      return;
    }

    alert("Gracias por registrarte");
    setRegistrado(true);
  };

  return (
    <div className="container">
      {registrado ? (
        <Menu />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="iusuario">Usuario : </label>
            <input
              type="text"
              className="form-control"
              id="iusuario"
              name="usuario"
              placeholder="Ingrese usuario"
            />
          </div>

          <div className="form-group">
            <label htmlFor="inombres">Nombres : </label>
            <input
              type="text"
              className="form-control"
              id="inombres"
              name="nombres"
              placeholder="Ingrese nombres"
            />
          </div>

          <div className="form-group">
            <label htmlFor="icorreo">Correo : </label>
            <input
              type="text"
              className="form-control"
              id="icorreo"
              name="correo"
              placeholder="Ingrese correo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="idni">DNI : </label>
            <input
              type="text"
              className="form-control"
              id="idni"
              name="dni"
              placeholder="Ingrese DNI"
            />
          </div>

          <div className="form-group">
            <label htmlFor="itelefono">Telefono : </label>
            <input
              type="text"
              className="form-control"
              id="itelefono"
              name="telefono"
              placeholder="Ingrese teléfono (7 a 9 digítos)"
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="itos"
              name="tos"
            />
            <label htmlFor="itos" className="form-check-label">
              Acepto Terminos y condiciones del servicio
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      )}
    </div>
  );
};

export default FormularioRegistro;
