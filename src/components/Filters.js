import React from 'react';
import './Filters.css';

const Filters = ({ onPlatformChange, onSortChange }) => {
  const platforms = [
    'PC', 'PlayStation', 'Xbox', 'Nintendo', 'iOS', 'Android'
  ];

  return (
    <div className="filters">
      <div className="filter-group">
        <label>Platform:</label>
        <select onChange={(e) => onPlatformChange(e.target.value)}>
          <option value="">All Platforms</option>
          {platforms.map(platform => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Sort by:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="rating">Rating</option>
          <option value="released">Newest</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;