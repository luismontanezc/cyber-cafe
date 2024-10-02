import React from "react";
import { useParams } from "react-router-dom";
import { info3 } from "./Info";
import "./InfoProducto.css";

const mostrarMensaje = () => {
    alert('Producto agregado al carrito');
  }

const InfoComplementos = () => {
    const { id } = useParams();
    const producto = info3.find(p => p.id === id);

    return (
        <section className="esp-portada">
            <h2 className="nombre-portada">{producto.titulo} </h2>
            <div className="portada-comple">
                <div className="compracomple">
                    <img className="img-comple" src={producto.vinculo} alt={producto.vinculo} />
                    <h2 className="precio-portada">{producto.precio}</h2>
                    <button className="boton-compra" onClick={mostrarMensaje}> AÑADIR AL CARRITO</button>
                </div>
                <div className="compracomple">
                    <img className="img-comple" src={producto.vinculo2} alt={producto.vinculo2} />
                    <h2 className="precio-portada">{producto.precio2}</h2>
                    <button className="boton-compra" onClick={mostrarMensaje}> AÑADIR AL CARRITO</button>
                </div>
                <div className="compracomple">
                    <img className="img-comple" src={producto.vinculo3} alt={producto.vinculo3} />
                    <h2 className="precio-portada">{producto.precio3}</h2>
                    <button className="boton-compra" onClick={mostrarMensaje}> AÑADIR AL CARRITO</button>
                </div>




            </div>

        </section>

    );

}
export default InfoComplementos