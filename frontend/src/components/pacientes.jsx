import React, { Component } from "react";
import Paciente from "./paciente";

class Pacientes extends Component {
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
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-sm">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Rut</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Telefono</th>
                  <th scope="col">Categorización</th>
                </tr>
              </thead>
              <tbody>
                {pacientes
                  .filter(p => p.categoria === 'null')
                  .map(paciente => (
                    <Paciente key={paciente._id} paciente={paciente} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Pacientes;
