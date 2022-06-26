import React from 'react';

import TasksFilter from '../TasksFilter';

import './footer.css';

interface Props {
  onFilter: (filter: string) => void;
  ClearCompleted: () => void;
  doneCount: number;
  filterStatus: string;
}

const Footer = ({ doneCount, onFilter, filterStatus, ClearCompleted }: Props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>

      <TasksFilter onFilter={onFilter} filterStatus={filterStatus} />

      <button className="clear-completed" onClick={() => ClearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
