import React from 'react';

import Task from '../Task/Task ';
import './TaskList.css';

const TaskList = ({
  todos,
  onDeleted,
  MarkCompleted,
  onEditTask,
  EditTask,
}: {
  todos: Array<{ id: number; label: string }>;
  onDeleted: (id: number) => void;
  MarkCompleted: (id: number) => void;
  onEditTask: (id: number) => void;
  EditTask: (id: number, label: string) => void;
}) => {
  const todoListItems = todos.map((item) => {
    return (
      <Task
        {...item}
        key={item.id}
        onDeleted={() => onDeleted(item.id)}
        MarkCompleted={() => MarkCompleted(item.id)}
        onEditTask={() => onEditTask(item.id)}
        EditTask={(id: number, label: string) => EditTask(id, label)}
      />
    );
  });

  return <ul className="todo-list">{todoListItems}</ul>;
};

export default TaskList;
