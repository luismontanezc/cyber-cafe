import React from "react";
import { useParams } from "react-router-dom";
import { info, info2 } from "./Info";
import "./InfoProducto.css";


const mostrarMensaje = () => {
  alert('Producto agregado al carrito');
}

const InfoProducto = () => {

  const { id } = useParams();
  const producto = info.find(p => p.id === id);

  return (
    <section className="esp-portada">
      <h2 className="nombre-portada">{producto.titulo} </h2>
      <div className="portada">
        <img className="img-principal" src={producto.vinculo} alt={producto.vinculo} />
        <h2 className="precio-portada">{producto.precio}</h2>
      </div>
      <div className="detalles">
        <h4>{producto.det1}</h4>
        <h4>{producto.det2}</h4>
        <h4>{producto.det3}</h4>
        <h4>{producto.det4}</h4> 
      </div>
      <div className="compra">
        <button className="boton-compra" onClick={mostrarMensaje}> AÑADIR AL CARRITO</button>
        <img className="icono-carrito" src="/imgs/kenneth/producto/carrito.jpg" alt="icono-compra" />
      </div>

    </section>

  );
}

const InfoProducto2 = () => {

  const { id } = useParams();
  const producto = info2.find(p => p.id === id);

  return (
    <section className="esp-portada">
      <h2 className="nombre-portada">{producto.titulo} </h2>
      <div className="portada">
        <img className="img-principal" src={producto.vinculo} alt={producto.vinculo} />
        <h2 className="precioA-portada">{producto.precioA}</h2>
        <h2 className="precio-portada">{producto.precio}</h2>
      </div>
      <div className="detalles">
        <h4>{producto.det1}</h4>
        <h4>{producto.det2}</h4>
        <h4>{producto.det3}</h4>
      </div>
      <div className="compra">
        <button className="boton-compra" onClick={mostrarMensaje}> AÑADIR AL CARRITO</button>
        <img className="icono-carrito" src="/imgs/kenneth/producto/carrito.jpg" alt="icono-compra" />
      </div>

    </section>

  );
}



export { InfoProducto, InfoProducto2 } 