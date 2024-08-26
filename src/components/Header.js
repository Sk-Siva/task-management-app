import React from 'react';
import '../App.css';

function Header({ onSearch, onFilter }) {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Search tasks..."
        className="search-input"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="filter-btn" onClick={onFilter}>
        <div className='title'><img src="https://res.cloudinary.com/dz8wat8bb/image/upload/v1724688927/filter_cbcaro.png" alt="filter"/>
        <p>Filter</p></div>
      </button>
    </div>
  );
}

export default Header;
