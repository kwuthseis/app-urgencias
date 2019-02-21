import React, { Component } from "react";
import { Row, Col} from 'reactstrap'
import Paciente from "./paciente";

class ListadoAtencion extends Component {
  state = {
    pacientes: [],
    modal: false
  };

  componentWillMount() {
    this.downloadListOfUsers();
  }
  
  downloadListOfUsers = () => {
    fetch("http://127.0.0.1:4000/api/pacientes/", {
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET"
    })
    .then(response => response.json())
    .then(json => {
      var pacientes = json.paciente;
      this.setState({pacientes});
    })
    .catch(error => console.log(error));
  };

  render() {
    const { pacientes } = this.state;

    // Se ordena los pacientes por categoria de mayor a menor
    pacientes.sort((a, b)=>{return b.categoria-a.categoria});
    let vista ='atencion';
    return (
      <Row>
          <Col>
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Rut</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {pacientes
                  .filter(p => p.categoria !== 'null')
                  .map(paciente => (
                    <Paciente key={paciente._id} paciente={paciente} vista={vista}/>
                  ))}
              </tbody>
            </table>
        </Col>
      </Row>
    );
  }
}

export default ListadoAtencion;