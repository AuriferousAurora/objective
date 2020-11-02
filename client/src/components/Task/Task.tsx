import React, { useEffect, useState }  from 'react';
import './Task.css';

function Task() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function transformTime(time: number) {
    return new Date(time * 1000).toISOString().substr(11, 8);
  }

  useEffect(() => {
    let interval: number = 0;
    if (isActive) {
      interval = window.setInterval(() => { setTime(time => time + 1); }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className='task'>
      <div className='task__info'>
        <h3 className='task__title'>Task: Programming</h3>
        <h5 className='task__time-alotted'>Time Allotted: 1.5 hours</h5>
        <h5 className='task__time-spent'>Time Spent: {transformTime(time)}</h5>
      </div>
      <div className='task__buttons'>
        <button className={`button button--${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}

export default Task;
