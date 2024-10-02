import React from "react";

const Apartados = [
    {texto: 'Política de Privacidad', url: '/Política de Privacidad'},
    {texto: 'Reembolsos', url: '/Reembolsos'},
    {texto: 'Empleo', url: '/Empleo'},
    {texto: 'Acerca de', url: '/acerca de'},
    {texto: 'Soporte', url: '/Soporte'},
]

const Redes = [
    {texto: 'TecFun', url: 'https://www.facebook.com/', img: 'imgs/Kenneth/img_footer/redes1.jpg' },
    {texto: 'TecFun', url: 'https://x.com/?lang=es', img: 'imgs/Kenneth/img_footer/redes2.jpg'}
]
function FooterItem({descripcion, enlace}){
    return(
        <a href={enlace} className= "item_footer">
            {descripcion}
        </a>
    )
}

function FooterRedes({descripcion, enlace, imagen}){
    return(
        <div className="redes">
            <img className="img_redes" src= {imagen} alt="redes"/>
            <a href={enlace} className="item_footer">
            {descripcion}
            </a>
        </div>  
        )
}
function Footer(){
    return (
        <footer className="footer">
            <div className="links">
                <p className="p_footer"> © 2024 Cibertec Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.</p>
                <div className="enlaces_footer">
                    <img className="icono_footer" src="imgs/Kenneth/img_footer/icono_footer.png" alt="icono"/>
                    {Apartados.map((elemento, x)=> (
                    <FooterItem key={x} descripcion={elemento.texto} enlace={elemento.url}/>))}
                    {Redes.map((elemento, z) => (
                    <FooterRedes key={z} descripcion={elemento.texto} enlace={elemento.url} imagen={elemento.img} />
                ))}
                </div>
                
            </div>
        </footer>
    )
}

export default Footer
