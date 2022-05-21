import React, { Component } from 'react';
import './Task .css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface Props {
  onDeleted: (id: number) => void;
  onEditTask: (id: number) => void;
  EditTask: (id: number, label: string) => void;
  MarkCompleted: () => void;
  id: number;
}

export default class Task extends Component<Props> {
  onSubmitTask = (e: any) => {
    e.preventDefault();
    const newLabel = e.target.EditTaskLabel.value;
    this.props.EditTask(this.props.id, newLabel);
  };

  render = () => {
    const { label, onDeleted, onEditTask, completed, hidden, MarkCompleted, date, edit }: any = this.props;
    let taskClassName = 'task';
    taskClassName += edit ? ' editing' : ' view';
    if (completed) {
      taskClassName += ' completed';
    }
    if (hidden) {
      taskClassName += ' hidden';
    }

    const PassedTime = formatDistanceToNow(date);

    return (
      <li className={taskClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={MarkCompleted} />
          <label>
            <span className="description">{label}</span>
            <span className="created">{PassedTime}</span>
          </label>

          <button type="button" className="icon icon-edit" onClick={onEditTask}></button>

          <button type="button" className="icon icon-destroy" onClick={onDeleted}></button>
        </div>

        <form name="EditTaskForm" onSubmit={this.onSubmitTask}>
          <input type="text" name="EditTaskLabel" className="edit" placeholder={label} />
        </form>
      </li>
    );
  };
}
