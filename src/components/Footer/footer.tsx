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
    return (
      <footer className="footer">
        <span className="todo-count">{this.props.doneCount} items left</span>

        <TasksFilter onFilter={this.props.onFilter} filterStatus={this.props.filterStatus} />

        <button className="clear-completed" onClick={() => this.props.ClearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  };
}
