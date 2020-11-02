import React, { useState } from 'react';
import './Content.css';
import Task from '../Task/Task';
import NewTask from '../NewTask/NewTask';

interface task {
  name: String;
  allotted_time: Number;
}

function Content() {

  const [newTask, setNewTask] = useState(false);

  const task1: task = { name: 'Programming', allotted_time: 2 };
  const task2: task = { name: 'Prayer', allotted_time: 1 };
  const [tasks, setTasks] = useState([task1, task2]);

  const taskComponents = tasks.map((task) => {
    return <Task name={task.name} allotted_time={task.allotted_time} />
  });

  function toggle() {
    setNewTask(!newTask);
  }

  return (
    <main>
      <button className='button' onClick={toggle}>New Task</button>
      { taskComponents }
      { newTask && <NewTask />}
    </main>
  );
}

export default Content;
