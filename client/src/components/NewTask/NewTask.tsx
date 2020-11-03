import React, { useState } from 'react';
import './NewTask.css';

function NewTask() {

  interface task {
    name: String;
    allotted_time: Number;
  }

  const baseURL = 'localhost:3001';
  const [taskTitle, setTaskTitle] = useState('');
  const [taskTime, setTaskTime] = useState(0);
  // ! This seems like a subpar solution, but it works so I'm rolling with it for now.
  const handleTitleChange = (e: React.KeyboardEvent<HTMLElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (value) setTaskTitle(value);
  }

  const handleTimeChange = (e: React.KeyboardEvent<HTMLElement>) => {
    const value = ((e.target as HTMLInputElement).value);
    const number = Number(value);
    if (number) setTaskTime(number);
  }

  const handleSumbit = async (e: MouseEvent) => {
    e.preventDefault();

    // try {
    //     const response = await fetch(baseURL + 'tasks', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then((res) => res.json());
    // } catch (err) {
    //     console.log(err);
    // }
  }

  return (
    <div className='task task--new'>
      <div className='task__info'>
        <input className='task__title' 
          placeholder='Task Title'
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleTitleChange(e)} />
        <h5 className='task__time-alotted'>Time Allotted: <input onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleTimeChange(e)}/> hours</h5>
      </div>
      <div className='task__buttons'>
        <button className='button'>Add</button>
      </div>
    </div>
  );
}

export default NewTask;
