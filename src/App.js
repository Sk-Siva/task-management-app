import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import TaskFormModal from './components/TaskFormModal';
import SuccessModal from './components/SuccessModal';
import './App.css';

function App() {
  const initialTasks = [
    { title: 'Brainstorming',description:'Brainstorming brings team members diverse experience into play. ', priority: 'Low', deadline: '12/7/24', status: 'To Do' },
    { title: 'Research',description:'User research helps you to create an optimal product for users.', priority: 'High', deadline: '12/7/24', status: 'To Do' },
    { title: 'Wireframes',description:'Low fidelity wireframes include the most basic content and visuals.', priority: 'High', deadline: '12/7/24', status: 'To Do' },
    { title: 'Onboarding Illustrations',description:'', priority: 'Low', deadline: '12/7/24', status: 'On Progress' },
    { title: 'Moodboard',description:'', priority: 'Low', deadline: '12/7/24', status: 'On Progress' },
    { title: 'Mobile App Design',description:'', priority: 'Completed', deadline: '12/7/24', status: 'Done' },
    { title: 'Design System',description:'It just needs to adapt the UI from what you did before ', priority: 'Completed', deadline: '12/7/24', status: 'Done' },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    setShowFormModal(false);
    setShowSuccessModal(true);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = () => {
    // Placeholder for filter functionality
    console.log('Filter button clicked');
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='app-main'>   
      <Header onSearch={handleSearch} onFilter={handleFilter} />
      <div className="app">
      <div className="task-sidebar">
        <TaskStats tasks={tasks} />
        <button className="add-task-btn" onClick={() => setShowFormModal(true)}>
          + Add Task
        </button>
      </div>
      <div className="task-board">
        <TaskList tasks={filteredTasks.filter(task => task.status === 'To Do')} title="To Do" />
        <TaskList tasks={filteredTasks.filter(task => task.status === 'On Progress')} title="On Progress" />
        <TaskList tasks={filteredTasks.filter(task => task.status === 'Done')} title="Done" />
      </div>
      {showFormModal && (
        <TaskFormModal onAddTask={handleAddTask} onClose={() => setShowFormModal(false)} />
      )}
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
    </div>
  );
}

export default App;
