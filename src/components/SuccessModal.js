import React from 'react';
import "../App.css"

function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="https://res.cloudinary.com/dz8wat8bb/image/upload/v1724690477/Vector_zqmoww.png" alt="success"/>
        <h2>new task has been created successfully</h2>
        <button className='add-task-btn' onClick={onClose}>Back</button>
      </div>
    </div>
  );
}

export default SuccessModal;
