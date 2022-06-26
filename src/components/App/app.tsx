import React, { useEffect, useState } from 'react';

import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

import './app.css';

interface TodoDataTask {
  label: string;
  id: number;
  hidden: boolean;
  completed: boolean;
  date: number;
  taskTimerStatus: boolean;
  timeStartDoTask: any;
}

const App = () => {
  const [todoData, changeTodoData] = useState<TodoDataTask[]>([]);
  const [filterStatus, changeFilterStatus] = useState('all');
  const [maxId, changeMaxId] = useState(1);
  const [nowDate, updateNowDate] = useState(new Date());

  const createNewTask = (label: string): void => {
    if (/^\s+$/.test(label) || !label) return;
    const thisId = maxId;
    const newArr = [
      ...todoData,
      {
        label: label,
        id: maxId,
        hidden: false,
        completed: false,
        date: Date.now(),
        taskTimerStatus: false,
        timeStartDoTask: 0,
      },
    ];
    changeTodoData(newArr);
    changeMaxId(thisId + 1);
  };

  useEffect(() => {
    setInterval(() => updateNowDate(new Date()), 1000);
    createNewTask('drink coffee');
  }, []);

  const setChangedTask = (ChangedTask: TodoDataTask, index: number): void => {
    const newArr = [...todoData.slice(0, index), ChangedTask, ...todoData.slice(index + 1)];
    changeTodoData(newArr);
  };

  const taskTimer = (id: number, timerStatus: boolean): void => {
    const idx: number = todoData.findIndex((el) => el.id === id);
    const oldTask = todoData[idx];
    if (timerStatus === oldTask.taskTimerStatus) return;
    const timeStartDoTask = oldTask.timeStartDoTask
      ? new Date().valueOf() - oldTask.timeStartDoTask.valueOf()
      : new Date();
    const newTask = { ...oldTask, taskTimerStatus: timerStatus, timeStartDoTask: timeStartDoTask };
    setChangedTask(newTask, idx);
  };

  const deleteTask = (id: number): void => {
    const idx: number = todoData.findIndex((el) => el.id === id);
    const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
    changeTodoData(newArr);
  };

  const MarkCompleted = (id: number): void => {
    const idx: number = todoData.findIndex((el) => el.id === id);
    const oldTask = todoData[idx];
    const newTask = { ...oldTask, completed: !oldTask.completed };
    setChangedTask(newTask, idx);
  };

  const EditTask = (id: number, label: string): void => {
    const idx: number = todoData.findIndex((el) => el.id === id);
    const oldTask = todoData[idx];
    if (/^\s+$/.test(label) || !label) return;
    const newTask = { ...oldTask, label: label };
    setChangedTask(newTask, idx);
  };

  const onFilter = (filter: string): void => {
    changeFilterStatus(filter);
  };

  const ClearCompleted = (): void => {
    const oldArr: Array<TodoDataTask> = [...todoData.slice(0)];
    const newArr = oldArr.filter((elem) => {
      return !elem.completed;
    });
    changeTodoData(newArr);
  };

  const doneCount = todoData.filter((elem) => elem.completed).length;
  return (
    <div className="todoapp">
      <header>
        <h1 className="header">todos</h1>

        <NewTaskForm onCreateNewTask={createNewTask} />
      </header>

      <section className="main">
        <TaskList
          todos={todoData}
          MarkCompleted={(id: number) => MarkCompleted(id)}
          onDeleted={(id: number) => deleteTask(id)}
          EditTask={(id: number, label: string) => EditTask(id, label)}
          filterStatus={filterStatus}
          taskTimer={(id: number, timerStatus: boolean) => taskTimer(id, timerStatus)}
          nowDate={nowDate}
        />

        <Footer
          onFilter={onFilter}
          ClearCompleted={() => ClearCompleted()}
          filterStatus={filterStatus}
          doneCount={doneCount}
        />
      </section>
    </div>
  );
};

export default App;
