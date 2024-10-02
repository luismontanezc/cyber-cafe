import React from "react";
import { info } from "./pages/Info";
import { useNavigate } from 'react-router-dom';


const Cuerpo1=() =>{
    
    const navigate = useNavigate();
    const cambioven = (id) => {
      navigate(`/InfoProducto/${id}`);
    };

    const imgs = info.map((url, i)=>
        <div className="producto-1" key={i} onClick={()=>cambioven(url.id)}> 
            <img className="img1" key={i} src={url.vinculo} alt={url.vinculo}/>
            <h3 className="nombre-product">{info[i].titulo}</h3>
            <span className="tipo-span">{info[i].tipo}</span>
            <h3 className="precio">{info[i].precio}</h3>
        </div>

)
    return(
        <section className="principal-content">
        <h2 className="categoria">Principales novedades</h2>
        <div className="novedades" >
            {imgs}
        </div>
    </section>  

    )


}


export default Cuerpo1