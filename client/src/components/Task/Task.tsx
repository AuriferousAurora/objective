import React from 'react';
import './Task.css';

function Task() {
  return (
    <div className='task'>
      <h3 className='task__title'>Task: Programming</h3>
      <h5 className='task__time-alotted'>Time Allotted: 1.5 hours</h5>
      <h5 className='task__time-spent'>Time Spent: 0.0 hours</h5>
    </div>
  );
}

export default Task;
