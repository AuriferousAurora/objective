import React, { useState } from 'react';
import './Content.css';
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

function Content() {
  const [newTask, setNewTask] = useState(false);

  function toggle() {
    setNewTask(!newTask);
  }

  return (
    <main>
      <button className='button' onClick={toggle}>New Task</button>
      <Task/>
      <Task/>
      { newTask && <NewTask />}
    </main>
  );
}

export default Content;
