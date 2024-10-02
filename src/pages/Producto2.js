import React from "react";
import { useNavigate } from "react-router-dom";
import { infoAsus } from "./InfoProductos";

const img = [
  { vinculo: "imgs/Marcas/Asus/asus1.jpg" },
  { vinculo: "imgs/Marcas/Asus/asus2.jpg" },
  { vinculo: "imgs/Marcas/Asus/asus3.jpg" },
  { vinculo: "imgs/Marcas/Asus/asus4.jpg" },
  { vinculo: "imgs/Marcas/Asus/asus5.jpg" },
  { vinculo: "imgs/Marcas/Asus/asus6.jpg" },
];

const Cuerpo2 = () => {
  const navigate = useNavigate();
  const cambioven = () => {
    navigate("/InfoProducto2");
  };

  const imgs = img.map((url, i) => (
    <div className="producto-1" key={i} onClick={cambioven}>
      <img className="img1" key={i} src={url.vinculo} alt={url.vinculo} />
      <h3 className="nombre-product">{infoAsus[i].titulo}</h3>
      <span className="tipo-span2">{infoAsus[i].tipo}</span>
      <h3 className="precio">{infoAsus[i].precio}</h3>
    </div>
  ));
  return (
    <section className="principal-content">
      <h2 className="categoria">Marca "Asus"</h2>
      <div className="novedades">{imgs}</div>
    </section>
  );
};

export default Cuerpo2;
