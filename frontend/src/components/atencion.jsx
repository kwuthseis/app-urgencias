import React, { Component } from "react";
import { Container, Jumbotron} from 'reactstrap';
import ListadoAtencion from "./listado_atencion";

class Atencion extends Component {

    render() {
        return (
        <Container>
            <Jumbotron>
            <h1>Atención</h1>
            <hr/>
            <ListadoAtencion />
            </Jumbotron>
        </Container>
        );
    }
}

export default Atencion;