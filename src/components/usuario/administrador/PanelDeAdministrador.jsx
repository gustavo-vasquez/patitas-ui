import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CustomAlert from "../../layout/CustomAlert";

const PanelDeAdministrador = () => {
    const location = useLocation();
    const [ contenidoAlert, setContenidoAlert ] = useState({
        mostrar: false,
        tipo: "",
        mensaje: ""
    });

    const ocultarAlert = () => {
        setContenidoAlert({ mostrar: false });
    }

    return (
        <div id="panel_administrativo_wrapper">
            {contenidoAlert.mostrar && <CustomAlert tipo={contenidoAlert.tipo} ocultarAlert={ocultarAlert}>
                {contenidoAlert.mensaje}
            </CustomAlert>}
            <h1 className="title">Panel administrativo</h1>
            <ul className="nav nav-underline nav-fill p-4">
                <li className="nav-item">
                    <Link to="/administradores/1/panel/activaciones" className={`nav-link ${location.pathname === "/administradores/1/panel/activaciones" ? "active" : "" }`}>Activar usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/administradores/1/panel/moderar-foro" className={`nav-link ${location.pathname === "/administradores/1/panel/moderar-foro" ? "active" : "" }`}>Moderar foro</Link>
                </li>
                <li className="nav-item">
                    <Link to="/administradores/1/panel/abm-usuarios" className={`nav-link ${location.pathname === "/administradores/1/panel/abm-usuarios" ? "active" : "" }`}>ABM usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/administradores/1/panel/datos-personales" className={`nav-link ${location.pathname === "/administradores/1/panel/datos-personales" ? "active" : "" }`}>Datos personales</Link>
                </li>
            </ul>
            <Outlet context={[ contenidoAlert, setContenidoAlert ]} />
        </div>
    );
}

export default PanelDeAdministrador;