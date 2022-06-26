import React from 'react';

import './TasksFilter.css';

interface Props {
  onFilter: (filter: string) => void;
  filterStatus: string;
}

const TasksFilter = ({ onFilter, filterStatus }: Props) => {
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
        <button type="button" className={filterStatus === 'done' ? 'selected' : ''} onClick={() => onFilter('done')}>
          Done
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
