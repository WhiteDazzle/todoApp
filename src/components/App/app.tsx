import React, { Component } from 'react';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './app.css';

interface State {
  todoData: Array<TodoDataTask>;
  filterStatus: string;
  maxId: number;
}

interface TodoDataTask {
  label: string;
  id: number;
  hidden: boolean;
  completed: boolean;
  date: number;
}

export default class App extends Component {
  state: State = {
    todoData: [],
    filterStatus: 'all',
    maxId: 1,
  };

  createNewTask = (label: string): void => {
    if (/^\s+$/.test(label)) return;
    const thisId = this.state.maxId;
    const newArr = [
      ...this.state.todoData.slice(0),
      { label: label, id: this.state.maxId, hidden: false, completed: false, date: Date.now() },
    ];
    this.setState({
      todoData: newArr,
      maxId: thisId + 1,
    });
  };

  deleteTask = (id: number): void => {
    const idx: number = this.state.todoData.findIndex((el) => el.id === id);
    const newArr = [...this.state.todoData.slice(0, idx), ...this.state.todoData.slice(idx + 1)];
    this.setState({
      todoData: newArr,
    });
  };

  MarkCompleted = (id: number): void => {
    const idx: number = this.state.todoData.findIndex((el) => el.id === id);
    const oldTask = this.state.todoData[idx];
    const newTask = { ...oldTask, completed: !oldTask.completed };

    const newArr = [...this.state.todoData.slice(0, idx), newTask, ...this.state.todoData.slice(idx + 1)];
    this.setState({
      todoData: newArr,
    });
  };

  EditTask = (id: number, label: string): void => {
    const idx: number = this.state.todoData.findIndex((el) => el.id === id);
    const oldTask = this.state.todoData[idx];
    if (/^\s+$/.test(label)) return;
    const newTask = { ...oldTask, label: label };
    const newArr = [...this.state.todoData.slice(0, idx), newTask, ...this.state.todoData.slice(idx + 1)];
    this.setState({
      todoData: newArr,
    });
  };

  onFilter = (filter: string): void => {
    this.setState({
      filterStatus: filter,
    });
  };

  ClearCompleted = (): void => {
    const oldArr: Array<TodoDataTask> = [...this.state.todoData.slice(0)];
    const newArr = oldArr.filter((elem) => {
      return !elem.completed;
    });

    this.setState({
      todoData: newArr,
    });
  };

  render = () => {
    const { todoData } = this.state;
    const doneCount = todoData.filter((elem) => elem.completed).length;

    return (
      <div className="todoapp">
        <header>
          <h1 className="header">todos</h1>

          <NewTaskForm onCreateNewTask={this.createNewTask} />
        </header>

        <section className="main">
          <TaskList
            todos={todoData}
            MarkCompleted={(id: number) => this.MarkCompleted(id)}
            onDeleted={(id: number) => this.deleteTask(id)}
            EditTask={(id: number, label: string) => this.EditTask(id, label)}
            filterStatus={this.state.filterStatus}
          />

          <Footer
            onFilter={this.onFilter}
            ClearCompleted={() => this.ClearCompleted()}
            filterStatus={this.state.filterStatus}
            doneCount={doneCount}
          />
        </section>
      </div>
    );
  };
}
