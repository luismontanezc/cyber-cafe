import React from "react";
import { info2 } from "./pages/Info";
import { useNavigate } from 'react-router-dom';

function Cuerpo2() {

    const navigate = useNavigate();
    const cambioven = (id) => {
      navigate(`/InfoProducto2/${id}`);
    };

    const imgs = info2.map((url, i)=>
        <div className="producto-2" key={i} onClick={()=>cambioven(url.id)}> 
            <img  className="img2" key={i} src={url.vinculo} alt={url.vinculo}/>
            <div>
                <h3 className="nombre-product2">{info2[i].titulo}</h3>
                <h4 className="precio-antiguo">{info2[i].precioA}</h4>
                <h3 className="precio2">{info2[i].precio}</h3>
            </div>
        </div>
    
    )

    return(
        <section className="nuevas-experiencias">
        <h2 className="categoria">Nuevas OFERTAS</h2>
        <div className="experiencias">
            {imgs}
        </div>
    </section>  
    )
}

export default Cuerpo2