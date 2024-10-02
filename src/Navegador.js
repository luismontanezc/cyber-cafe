import React from "react";


const Elementos = [
    { texto: 'TecFun', url: 'https://www.google.com.pe' },
    { texto: 'Inicio', url: '/' },
    { texto: 'Soporte', url: 'https://www.cibertec.edu.pe' },
    { texto: 'Quiénes somos', url: '/' },
    { texto: 'Login', url: '/FormularioLogin' },
]

function MenuItem({ descripcion, enlace }) {
    return (
        <a href={enlace} className="item">
            {descripcion}
        </a>
    )
}

function SecondaryMenu() {
    return (
        <nav className="secondary-bar">
            <input type="text" className="search-input" placeholder="Buscar..." />
            <a href="/noticias" className="item">Noticias</a>
            <a href="/ofertas" className="item">Ofertas</a>
        </nav>
    );
}

const Navegador = () => {

    return (
        <nav className="bloque">
            {Elementos.map((elemento, indice) => (
                <MenuItem
                    key={indice}
                    descripcion={elemento.texto}
                    enlace={elemento.url}
                />
            ))}
        </nav>
    )
}



export {SecondaryMenu, Navegador}