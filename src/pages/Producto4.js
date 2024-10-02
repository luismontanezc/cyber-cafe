import React from "react";
import { useNavigate } from "react-router-dom";
import { infoHP } from "./InfoProductos";

const img = [
  { vinculo: "imgs/Marcas/HP/hp1.jpg" },
  { vinculo: "imgs/Marcas/HP/hp2.jpg" },
  { vinculo: "imgs/Marcas/HP/hp3.jpg" },
  { vinculo: "imgs/Marcas/HP/hp4.jpg" },
  { vinculo: "imgs/Marcas/HP/hp5.jpg" },
  { vinculo: "imgs/Marcas/HP/hp6.jpg" },
];

const Cuerpo3 = () => {
  const navigate = useNavigate();
  const cambioven = () => {
    navigate("/InfoProducto3");
  };

  const imgs = img.map((url, i) => (
    <div className="producto-1" key={i} onClick={cambioven}>
      <img className="img1" key={i} src={url.vinculo} alt={url.vinculo} />
      <h3 className="nombre-product">{infoHP[i].titulo}</h3>
      <span className="tipo-span2">{infoHP[i].tipo}</span>
      <h3 className="precio">{infoHP[i].precio}</h3>
    </div>
  ));
  return (
    <section className="principal-content">
      <h2 className="categoria">Marca "Asus"</h2>
      <div className="novedades">{imgs}</div>
    </section>
  );
};

export default Cuerpo3;
