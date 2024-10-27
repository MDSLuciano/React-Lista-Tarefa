import React, { Component } from "react";

//Form
import { FaPlus } from "react-icons/fa"

//Tarefas
import { FaEdit, FaWindowClose } from "react-icons/fa"

import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let { newTask, tasks } = this.state;
    newTask = newTask.trim();

    //Validação se existe uma tarefa vazia
    if (newTask === "") return;

    //Validação se a tarefa ja existe
    if (tasks.indexOf(newTask) > -1) return;//Se tiver retorna
    const newTasks = [...tasks, newTask];//Cria uma nova tarefa

    this.setState({
      tasks: newTasks,
      newTask: "",//
    });
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value
    });
  }

  handleEdit = (event, index) => {
    console.log('Editando tarefa', index);

  }

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);//Remove a tarefa selecionada

    this.setState({
      tasks: newTasks
    });
  }


  render() {
    const { newTask, tasks } = this.state; //Desestruturação do metodo state

    return (
    <div className="main">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={this.handleSubmit} action="#" className="form">
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
        {tasks.map((task, index) => (
          <li key={ index }>{ task }
            <span>
              <FaEdit
                onClick={(event) => this.handleEdit(event, index)}
                className="edit"
              />

              <FaWindowClose
                onClick={(event) => this.handleDelete(event, index)}
                className="delete"
              />
            </span>
          </li>
        ))}
      </ul>

    </div>
    );
  }
}
