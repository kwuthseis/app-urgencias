import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Pacientes from "./components/pacientes";
import Ingreso from "./components/ingreso";
import Atencion from "./components/atencion";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Ingreso />
        <Pacientes />
        <Atencion />
      </div>
    );
  }
}

export default App;
