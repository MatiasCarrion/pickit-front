import React from "react";
import { Button } from "react-bootstrap";
import './home.pages.css';
import autoService from '../../services/autos.service';
import { Link } from "react-router-dom";

function Home() {

    return (
        <>
        <header>
            <h3 className="titulo-gral">
                Opciones disponibles
            </h3>
        </header>
        <div className="div-menues">
        <Link to="/autos"> <Button variant="outline-primary" className="boton" >Autos </Button>{' '}</Link>
        <Link to="/clientes"> <Button variant="outline-primary" className="boton" >Clientes </Button>{' '}</Link>
        </div>
        </>
    )
}

export default Home;
