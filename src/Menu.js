import React from "react";
import Monitores from "./Imagenes-1";
import { useNavigate } from "react-router-dom";
import Cuerpo1 from "./Cuerpo1";
import Cuerpo2 from "./Cuerpo2";
import Cuerpo3 from "./Cuerpo3";

function MenuArticle({ onNavigate }) {
  const marcas = [
    "ACER",
    "ASUS",
    "HP",
    "PROCESADORES INTEL",
    "LENOVO",
    "PROCESADORES RYZEN",
  ];

  const imgs = Monitores.map((src, index) => (
    <article key={index} onClick={() => onNavigate(index)}>
      <img
        className="imagenes"
        alt={marcas[index]}
        src={process.env.PUBLIC_URL + src}
      />
      <p>{marcas[index]}</p>
    </article>
    
  ));

  return (
    <nav className="main">
      <h1 className="marca">Marcas exclusivas</h1>
      <section className="productos">{imgs}</section>
    </nav>
  );
}

const Menu = () => {
  const navigate = useNavigate();
  const handleNavigate = (index) => {
    const routes = [
      "/producto",
      "/producto2",
      "/producto3",
      "/producto/intel",
      "/producto/lenovo",
      "/producto/ryzen",
    ];
    navigate(routes[index]);
  };

  return (
    <header>
      <MenuArticle onNavigate={handleNavigate} />
      <Cuerpo1 />
      <Cuerpo2 />
      <Cuerpo3 />
    </header>
  );
};

export default Menu;