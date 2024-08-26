import React from 'react';
import '../App.css';

function TaskList({ tasks, title }) {
  const getStyle = () => {
    switch (title) {
      case "To Do":
        return "blue";
      case "On Progress":
        return "orange";
      case "Done":
        return "green";
      default:
        return null;
    }
  };

  return (
    <div className="task-list">
      <div className="title">
        <span className={`dot ${getStyle()}-dot`} />
        <h3>{title}</h3>
        <p className="count">{tasks.filter(task => task.status === title).length}</p>
      </div>
      <hr className={getStyle()} />
      {tasks.map((task) => (
        <div key={task.id} className={`task-item ${task.status.toLowerCase().replace(' ', '-')}`}>
          <div className='item-head'>
          <p className={task.priority}>{task.priority}</p>
          <p>...</p>
          </div>
          <h4>{task.title}</h4>
          <p className='description'>{task.description}</p>
          <p className='deadline'>Deadline: {task.deadline}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;