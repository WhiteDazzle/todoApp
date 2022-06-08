import React, { Component } from 'react';

import './NewTaskForm.css';

interface NewTaskFormProps {
  onCreateNewTask: (label: string) => void;
}

export default class NewTaskForm extends Component<NewTaskFormProps> {
  state = { inputTextValue: '' };

  submitNewTask = (e: any) => {
    e.preventDefault();
    this.props.onCreateNewTask(this.state.inputTextValue);
    this.setState({ inputTextValue: '' });
  };

  onChangeNewTask = (value: string): void => {
    this.setState({
      inputTextValue: value,
    });
  };

  render = () => {
    return (
      <form onSubmit={this.submitNewTask} name="newTaskForm">
        <input
          className="new-todo"
          name="newTaskLabel"
          value={this.state.inputTextValue}
          placeholder="What needs to be done?"
          onChange={(e) => this.onChangeNewTask(e.target.value)}
        />
      </form>
    );
  };
}
