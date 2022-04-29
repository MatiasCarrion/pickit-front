import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./autos.pages.css";

import autoService from "../../services/autos.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { Link } from "react-router-dom";

function Autos() {
  const [filas, setFilas] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    data_autos();
  }, []);

  const data_autos = async () => {
    const res = await autoService.getTodosLosAutos();
    setFilas(res.data);
    setLoading(false)
  };

  return (
      <>
      {
        !loading && filas && 
        <>
      <h3 className="titulo-gral">Autos</h3>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Patente</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Propietario</th>
              <th>Teléfono</th>
              <th>Mail</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
            filas.map((unAuto, index) => {
              return (
              <tr key={index}>
                <td> {unAuto?.id} </td>
                <td>{unAuto?.patente}</td>
                <td>{unAuto?.marca?.nombre}</td>
                <td>{unAuto?.marca?.modelo?.nombre}</td>
                <td>{unAuto?.propietario?.nombre}</td>
                <td>{unAuto?.propietario?.apellido}</td>
                <td>{unAuto?.propietario?.telefono}</td>
                <td>{unAuto?.propietario?.mail}</td>
                <td className="cell-acciones">
                <Link to={`edit/${unAuto.patente}`}>
                <FontAwesomeIcon icon={solid('pen')} />
                </Link>
                <Link to={`edit/${unAuto.patente}`}>
                <FontAwesomeIcon icon={solid('timeline')} />
                </Link>
                <Link to={`edit/${unAuto.patente}`}>
                <FontAwesomeIcon icon={solid('plus')} />
                </Link>
                </td>
              </tr>
              )
            })
        }
          </tbody>
        </Table>

      </div>
      </>
}
    </>
  );
}

export default Autos;
