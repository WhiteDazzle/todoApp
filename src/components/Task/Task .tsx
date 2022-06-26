import React, { useState } from 'react';
import './Task .css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

interface Props {
  onDeleted: (id: number) => void;
  EditTask: (id: number, label: string) => void;
  MarkCompleted: () => void;
  id: number;
  completed: boolean;
  taskTimer: (id: number, timerStatus: boolean) => void;
  timeStartDoTask: any;
  nowDate: any;
  taskTimerStatus: boolean;
  label: string;
  hidden: boolean;
  date: number;
}

const Task = ({
  completed,
  onDeleted,
  MarkCompleted,
  EditTask,
  taskTimer,
  timeStartDoTask,
  nowDate,
  taskTimerStatus,
  id,
  label,
  hidden,
  date,
}: Props) => {
  const PassedTime = formatDistanceToNow(date);
  const [edit, switchEdit] = useState(false);
  const [editTitleValue, editTitle] = useState(label);
  const onSubmitTask = (e: any) => {
    e.preventDefault();
    EditTask(id, editTitleValue);
    switchEdit(false);
  };
  const handleEditTask = (): void => {
    switchEdit(true);
  };

  const switchTaskTimer = (status: boolean): void => {
    taskTimer(id, status);
  };

  const handleChangeEditTask = (value: string): void => {
    editTitle(value);
  };
  const taskTimeCount = () => {
    if (!timeStartDoTask) return '0:0';
    const taskTime = !taskTimerStatus
      ? Math.floor(timeStartDoTask / 1000 + 1)
      : Math.floor((nowDate - timeStartDoTask) / 1000 + 1);
    return `${Math.floor(taskTime / 60)}:${Math.floor(taskTime % 60)}`;
  };
  let taskClassName = 'task';
  taskClassName += edit ? ' editing' : ' view';
  if (completed) {
    taskClassName += ' completed';
  }
  if (hidden) {
    taskClassName += ' hidden';
  }

  return (
    <li className={taskClassName}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={MarkCompleted} checked={completed} />
        <label>
          <span className="description">{label}</span>
          <span className="task__timer-group">
            <button className="icon-play" onClick={() => switchTaskTimer(true)}></button>
            <button className="icon-pause" onClick={() => switchTaskTimer(false)}></button>
            <span className="task__timer-counter"> {taskTimeCount()}</span>
          </span>
          <span className="created">{PassedTime}</span>
        </label>

        <button type="button" className="icon icon-edit" onClick={handleEditTask}></button>

        <button type="button" className="icon icon-destroy" onClick={() => onDeleted(id)}></button>
      </div>

      <form name="EditTaskForm" onSubmit={onSubmitTask}>
        <input
          type="text"
          name="EditTaskLabel"
          className="edit"
          placeholder={label}
          value={editTitleValue}
          onChange={(e) => handleChangeEditTask(e.target.value)}
        />
      </form>
    </li>
  );
};

export default Task;
