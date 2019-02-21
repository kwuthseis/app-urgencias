import React, { Component } from "react";
import ModalExample from "./modal";
import { Button } from "reactstrap";

class Paciente extends Component {
  render() {
    const { _id, nombre, apellidos, telefono, rut} = this.props.paciente;
    const vista = this.props.vista;
    let modal, categoria;
    if (vista === 'atencion') {
      categoria = (
        <td>
          <div className={this.getBadgeClasses()}>
            {this.getCategorizationName()}
          </div>
        </td>
      )
      modal = (
        <td>
          <Button outline color="warning" onClick={this.handleDeparture} value={_id}>
            Dar de alta
          </Button>
        </td>
      )
    } else {
      modal = (
        <td>
          <ModalExample key={_id} pac_id={_id}/>
        </td>
      )
    }
    
    return (
      <tr>
        <td>{rut}</td>
        <th scope="row">{nombre}</th>
        <td>{apellidos}</td>
        <td>{telefono}</td>
          {categoria}
          {modal}
      </tr>
    );
  }

  getCategorizationName() {
    const { categoria } = this.props.paciente;
    let glosa = "";
    switch (categoria*1) {
      case 0:
        glosa = "Sin asignar";
        break;
      case 1:
        glosa = "Leve";
        break;
      case 2:
        glosa = "Moderado";
        break;
      case 3:
        glosa = "Urgente";
        break;
      case 4:
        glosa = "Critico";
        break;
      default:
        break;
    }
    return glosa;
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-";
    const { categoria } = this.props.paciente;
    switch (categoria*1) {
      case 0:
        classes += "success";
        break;
      case 1:
        classes += "primary";
        break;
      case 2:
        classes += "info";
        break;
      case 3:
        classes += "warning";
        break;
      case 4:
        classes += "danger";
        break;
      default:
        classes += "secondary";
        break;
    }
    return classes;
  }

  handleDeparture = e => {
    const textoDeConfirmacion = "Esta acción no se puede revertir, ¿esta seguro que desea dar el paciente de alta?";
    if(!window.confirm(textoDeConfirmacion)) {
      return;
    }

    const pacienteId = e.target.value;
    
    // Por ahora no existe un estado de alta por lo que se eliminara el paciente
    const url = 'http://127.0.0.1:4000/api/pacientes/'+pacienteId;
    fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({}), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(json => {
      // La eliminación de paciente devuelve un mensaje junto y en caso de exito los datos del paciente
      let message = json.message;
      alert(message);
    })
    .catch(error => console.log(error)); // parses response to JSON
  } 
}

export default Paciente;
