import React, { Component } from "react";

//Form
import { FaPlus } from "react-icons/fa"

//Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa"

import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [
      'Lavar a louca',
      'Estudar React',
      'Ler um livro',
    ],
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }
  render() {
    const { newTask, tasks } = this.state; //Desestruturação do metodo state

    return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form action="#" className="form">
        <input
        onChange={this.handleChange}
        type="text"
        value={newTask}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>

      {/* Renderização condicional e não podemos esquecer da key*/}
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={ task }>{ task }
            <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </div>
          </li>
        ))}
      </ul>

    </div>
    );
  }
}
