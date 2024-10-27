import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }
  render() {
    const { newTask } = this.state;

    return (
    <div className="main">
      <h1>Lista de Tarefas</h1>
      <form action="#">
        <input onChange={this.handleChange} type="text" placeholder="Tarefa"/>
        <button type="submit">Adicionar</button>
      </form>
    </div>
    );
  }
}
