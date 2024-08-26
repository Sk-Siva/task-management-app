import React, { useState } from 'react';
import "../App.css"

function TaskFormModal({ onAddTask, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, deadline, priority, status };
    onAddTask(newTask);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div className="add-title">
        <div className='title'> <span className={`dot blue-dot`} />
        <h3>ADD TASK</h3></div>

        <div className="count">
        <img src="https://res.cloudinary.com/dz8wat8bb/image/upload/v1724688927/icons_m95imk.png" alt="add"/>
        </div>
      </div>
      <hr />
        <form className="task-item" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <hr/>
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="To Do">To Do</option>
            <option value="On Progress">On Progress</option>
            <option value="Done">Done</option>
          </select>
          <button type="submit">Add Task</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormModal;
