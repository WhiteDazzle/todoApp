import React, { Component } from 'react';
import './Task .css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface Props {
  onDeleted: (id: number) => void;
  EditTask: (id: number, label: string) => void;
  MarkCompleted: () => void;
  id: number;
  completed: boolean;
  taskTimer: (id: number, timerStatus: boolean) => void;
  taskTime: number;
  taskTimerId: number;
}

interface State {
  edit: boolean;
  editTextValue: string;
}

export default class Task extends Component<Props> {
  state: State = {
    edit: false,
    editTextValue: '',
  };

  onSubmitTask = (e: any) => {
    e.preventDefault();
    this.props.EditTask(this.props.id, this.state.editTextValue);
    this.setState({ edit: false });
  };

  onEditTask = (): void => {
    this.setState({ edit: true });
  };

  onTaskTimer = (status: boolean): void => {
    this.props.taskTimer(this.props.id, status);
  };

  onChangeEditTask = (value: string): void => {
    this.setState({
      editTextValue: value,
    });
  };

  render = () => {
    const taskTime = `${Math.floor(this.props.taskTime / 60)}:${this.props.taskTime % 60}`;
    const { label, onDeleted, completed, hidden, MarkCompleted, date }: any = this.props;
    let taskClassName = 'task';
    taskClassName += this.state.edit ? ' editing' : ' view';
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
          <input className="toggle" type="checkbox" onChange={MarkCompleted} checked={completed} />
          <label>
            <span className="description">{label}</span>
            <span className="task__timer-group">
              <button className="icon-play" onClick={() => this.onTaskTimer(true)}></button>
              <button className="icon-pause" onClick={() => this.onTaskTimer(false)}></button>
              <span className="task__timer-counter"> {taskTime}</span>
            </span>
            <span className="created">{PassedTime}</span>
          </label>

          <button type="button" className="icon icon-edit" onClick={this.onEditTask}></button>

          <button type="button" className="icon icon-destroy" onClick={onDeleted}></button>
        </div>

        <form name="EditTaskForm" onSubmit={this.onSubmitTask}>
          <input
            type="text"
            name="EditTaskLabel"
            className="edit"
            placeholder={label}
            value={this.state.editTextValue}
            onChange={(e) => this.onChangeEditTask(e.target.value)}
          />
        </form>
      </li>
    );
  };
}
