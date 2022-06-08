import React, { Component } from 'react';

import TasksFilter from '../TasksFilter';

import './footer.css';

interface Props {
  onFilter: (filter: string) => void;
  ClearCompleted: () => void;
  doneCount: number;
  filterStatus: string;
}

export default class Footer extends Component<Props> {
  render = () => {
    const { doneCount, onFilter, filterStatus, ClearCompleted } = this.props;
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
}
