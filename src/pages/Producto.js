import React from "react";
import { useNavigate } from "react-router-dom";
import { infoAcer } from "./InfoProductos";

const img = [
  { vinculo: "imgs/Marcas/Acer/acer1.jpg" },
  { vinculo: "imgs/Marcas/Acer/acer2.jpg" },
  { vinculo: "imgs/Marcas/Acer/acer3.jpg" },
  { vinculo: "imgs/Marcas/Acer/acer4.jpg" },
  { vinculo: "imgs/Marcas/Acer/acer5.jpg" },
  { vinculo: "imgs/Marcas/Acer/acer6.jpg" },
];

const Cuerpo1 = () => {
  const navigate = useNavigate();
  const cambioven = () => {
    navigate("/InfoProducto");
  };

  const imgs = img.map((url, i) => (
    <div className="producto-1" key={i} onClick={cambioven}>
      <img className="img1" key={i} src={url.vinculo} alt={url.vinculo} />
      <h3 className="nombre-product">{infoAcer[i].titulo}</h3>
      <span className="tipo-span2">{infoAcer[i].tipo}</span>
      <h3 className="precio">{infoAcer[i].precio}</h3>
    </div>
  ));
  return (
    <section className="principal-content">
      <h2 className="categoria">Marca "Acer"</h2>
      <div className="novedades">{imgs}</div>
    </section>
  );
};

export default Cuerpo1;
