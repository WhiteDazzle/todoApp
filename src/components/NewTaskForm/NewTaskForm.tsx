import React, { Component } from 'react';

import './NewTaskForm.css';

interface NewTaskFormProps {
  onCreateNewTask: (label: string) => void;
}

export default class NewTaskForm extends Component<NewTaskFormProps> {
  submitNewTask = (e: any) => {
    e.preventDefault();
    this.props.onCreateNewTask(e.target.newTaskLabel.value);
    e.target.newTaskLabel.value = '';
  };

  render = () => {
    return (
      <form onSubmit={this.submitNewTask} name="newTaskForm">
        <input className="new-todo" name="newTaskLabel" placeholder="What needs to be done?" />
      </form>
    );
  };
}
