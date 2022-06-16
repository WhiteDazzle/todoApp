import React from 'react';

import Task from '../Task/Task ';
import './TaskList.css';

const TaskList = ({
  todos,
  onDeleted,
  MarkCompleted,
  EditTask,
  filterStatus,
  taskTimer,
  nowDate,
}: {
  todos: Array<{ id: number; label: string; completed: boolean; timeStartDoTask: any; taskTimerStatus: boolean }>;
  onDeleted: (id: number) => void;
  MarkCompleted: (id: number) => void;
  EditTask: (id: number, label: string) => void;
  filterStatus: string;
  taskTimer: (id: number, timerStatus: boolean) => void;
  nowDate: any;
}) => {
  const filterTodos = todos.filter((elem) => {
    if (filterStatus === 'active') return !elem.completed;
    if (filterStatus === 'done') return elem.completed;
    return true;
  });
  const todoListItems = filterTodos.map((item) => {
    return (
      <Task
        {...item}
        completed={item.completed}
        key={item.id}
        onDeleted={() => onDeleted(item.id)}
        MarkCompleted={() => MarkCompleted(item.id)}
        EditTask={(id: number, label: string) => EditTask(id, label)}
        taskTimer={(id: number, timerStatus: boolean) => taskTimer(id, timerStatus)}
        timeStartDoTask={item.timeStartDoTask}
        nowDate={nowDate}
        taskTimerStatus={item.taskTimerStatus}
      />
    );
  });

  return <ul className="todo-list">{todoListItems}</ul>;
};

export default TaskList;
