import React, { Component } from 'react';

import './TasksFilter.css';

interface Props {
  onFilter: (filter: string) => void;
  filterStatus: string;
}

export default class TasksFilter extends Component<Props> {
  render = () => {
    const { onFilter, filterStatus } = this.props;
    return (
      <ul className="filters">
        <li>
          <button type="button" className={filterStatus === 'all' ? 'selected' : ''} onClick={() => onFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filterStatus === 'active' ? 'selected' : ''}
            onClick={() => onFilter('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={filterStatus === 'done' ? 'selected' : ''}
            onClick={() => this.props.onFilter('done')}
          >
            Done
          </button>
        </li>
      </ul>
    );
  };
}
