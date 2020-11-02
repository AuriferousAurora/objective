import React from 'react';
import './NewTask.css';

function Task() {
  return (
    <div className='task task--new'>
      <div className='task__info'>
        <input className='task__title' placeholder='Task Title' />
        <h5 className='task__time-alotted'>Time Allotted: <input /> hours</h5>
      </div>
      <div className='task__buttons'>
        <button className='button'>Add</button>
      </div>
    </div>
  );
}

export default Task;
