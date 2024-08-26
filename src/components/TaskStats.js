import React from 'react';

function TaskStats({ tasks }) {
  return (
    <div className="task-stats">
      <div className="task-stat-item">
        <p>Expired Tasks</p>
        <h1>{tasks.filter(task => task.status === 'Timeout').length}</h1>
      </div>
      <div className="task-stat-item">
        <p>All Active Tasks</p>
        <h1>{tasks.filter(task => task.status !== 'Done').length}</h1>
      </div>
      <div className="task-stat-item">
        <p>Completed Tasks</p>
        <h1> {tasks.filter(task => task.status === 'Done').length}</h1>
      </div>
    </div>
  );
}

export default TaskStats;
