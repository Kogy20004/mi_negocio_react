import { Link } from "react-router-dom";
import './button-index.css'

export function Button_index() {
    return (
        <div className="content-button-index">
            <Link to="/inventario">
                <div className="button-index inventario">
                    <span>INVENTARIO</span>
                    <img src="./src/assets/carga-de-camiones.svg"></img>
                </div>
            </Link>

            <Link to="/caja">
                <div className="button-index caja">    
                <span>CAJA</span> 
                        <img src="./src/assets/caja-registradora_1.svg"></img>
                </div>
            </Link>
        </div>
    )
}