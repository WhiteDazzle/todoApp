import React, { useState } from 'react';

import './NewTaskForm.css';

interface NewTaskFormProps {
  onCreateNewTask: (label: string) => void;
}

const NewTaskForm = ({ onCreateNewTask }: NewTaskFormProps) => {
  const [inputTextValue, handleTitleNewTask] = useState('');
  const submitNewTask = (e: any) => {
    e.preventDefault();
    onCreateNewTask(inputTextValue);
    handleTitleNewTask('');
  };
  const onChangeNewTask = (value: string): void => {
    handleTitleNewTask(value);
  };
  return (
    <form onSubmit={submitNewTask} name="newTaskForm">
      <input
        className="new-todo"
        name="newTaskLabel"
        value={inputTextValue}
        placeholder="What needs to be done?"
        onChange={(e) => onChangeNewTask(e.target.value)}
      />
    </form>
  );
};

export default NewTaskForm;
