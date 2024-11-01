import React, { Component } from "react";
import Form from "./Form";
import Tasks from "./Tasks";

import "./Main.css";

export default class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) return;

    this.setState({ tasks });
  }

  //Persiste as tarefas, se tiver alteração ele persiste os dados no localStorage
  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    //Validação se existe uma tarefa vazia
    if (newTask === "") return;

    //Validação se a tarefa ja existe
    if (tasks.indexOf(newTask) > -1) return;//Se tiver retorna
    const newTasks = [...tasks];//Cria uma nova tarefa

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],//Primeiro parametro são as tarefas anteriores, e o segundo parametro e a nova tarefa
        newTask: "",//Limpa o input
      });
    }else {
      newTasks[index] = newTask;//Edita uma tarefa

      this.setState({
        tasks: newTasks,
        newTask: "",
        index: -1
      });
    };
  }

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  }

  handleEdit = (event, index) => {
    const { tasks } = this.state;//Desestruturação do metodo state

    //Edita uma tarefa
    this.setState({
      index,
      newTask: tasks[index]
    })

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

      <Form
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
      newTask={newTask}
      />

      {/* Renderização condicional e não podemos esquecer da key*/}

      <Tasks
        tasks={tasks}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
      />

    </div>
    );
  }
}
