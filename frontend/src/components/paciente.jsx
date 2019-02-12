import React, { Component } from "react";
import ModalExample from "./modal";

class Paciente extends Component {
  render() {
    const { _id, nombre, apellidos, telefono, rut } = this.props.paciente;
    return (
      <tr>
        <td>{rut}</td>
        <th scope="row">{nombre}</th>
        <td>{apellidos}</td>
        <td>{telefono}</td>
        <td>
          <ModalExample 
            key={_id}
            pac_id={_id}
          />
        </td>
      </tr>
    );
  }

  getCategorizationName() {
    const { categorizacion } = this.props.paciente;
    let categoria = "";
    switch (categorizacion) {
      case 0:
        categoria = "Sin asignar";
        break;
      case 1:
        categoria = "Grave";
        break;
      case 2:
        categoria = "Critico";
        break;
      default:
        break;
    }
    return categoria;
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-";
    const { categorizacion } = this.props.paciente;
    switch (categorizacion) {
      case 0:
        classes += "info";
        break;
      case 1:
        classes += "warning";
        break;
      case 2:
        classes += "danger";
        break;
      default:
        break;
    }
    return classes;
  }
}

export default Paciente;
