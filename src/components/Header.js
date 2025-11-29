import React from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🎮 Game Hub</h1>
        <input 
          type="text" 
          placeholder="Search games..." 
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;