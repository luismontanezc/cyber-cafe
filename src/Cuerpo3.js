import React from "react";
import { info3 } from "./pages/Info";
import { useNavigate } from 'react-router-dom';


function Cuerpo3() {

    const navigate = useNavigate();
    const cambioven = (id) => {
      navigate(`/InfoComplementos/${id}`);
    }

    const imgs = info3.map((url, i)=>
        <div className="producto-3" key={i} onClick={()=>cambioven(url.id)}> 
            <img className="img3" key={i} src={url.vinculo} alt={url.vinculo}/>
            <button className="boton_complemento">{info3[i].titulo}</button>
        </div>
    )
    
    return(
        <section>
        <h2 className="categoria">Algunos COMPLEMENTOS</h2>
        <div className="complementos">
            {imgs}
        </div>
    </section>  
    )
}

export default Cuerpo3