import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleCategorizacion(pac_id) {
    console.log("HERE: ", pac_id);
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
                <select name="categoria" id="categoria">
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
            <Button color="success" onClick={this.handleCategorizacion(this.props.pac_id)}>
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
