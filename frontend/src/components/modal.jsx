import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      categoria: 1
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = e => {
    let nueva_categoria = e.target.value;
    this.setState({
      categoria: nueva_categoria 
    });
  }

  handleCategorizacion = e => {
    let id_paciente = e.target.value;
    const url = 'http://127.0.0.1:4000/api/pacientes/'+id_paciente;
    fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
          "Content-Type": "application/json",
          // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({categoria: this.state.categoria}), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          Categorizar
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Categorización del Paciente
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-2">
              Categoria:
              </div>
              <div className="col-md-6">
                <select name="categoria" id="categoria" onChange={this.handleChange}>
                  <option value="1">C1</option>
                  <option value="2">C2</option>
                  <option value="3">C3</option>
                  <option value="4">C4</option>
                  <option value="5">C5</option>
                </select>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleCategorizacion} value={this.props.pac_id}>
              Categorizar
            </Button>
            <Button color="danger" onClick={this.toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
