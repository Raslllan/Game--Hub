import React from 'react';
import './GenreSidebar.css';

const GenreSidebar = ({ selectedGenre, onGenreChange }) => {
  const genres = [
    { name: 'Action', icon: '⚔️' },
    { name: 'Adventure', icon: '🗺️' },
    { name: 'RPG', icon: '🎭' },
    { name: 'Shooter', icon: '🔫' },
    { name: 'Strategy', icon: '♟️' },
    { name: 'Sports', icon: '⚽' },
    { name: 'Racing', icon: '🏎️' },
    { name: 'Puzzle', icon: '🧩' },
    { name: 'Indie', icon: '🎨' },
    { name: 'Platformer', icon: '👾' },
    { name: 'Simulation', icon: '✈️' },
    { name: 'Arcade', icon: '🕹️' },
    { name: 'Massively Multiplayer', icon: '🌐' },
    { name: 'Fighting', icon: '🥊' },
    { name: 'Family', icon: '👨‍👩‍👧‍👦' },
    { name: 'Board Games', icon: '🎲' },
    { name: 'Educational', icon: '📚' }
  ];

  return (
    <div className="genre-sidebar">
      <h3>🎮 Genres</h3>
      <div className="genre-list">
        <button 
          className={selectedGenre === '' ? 'genre-btn active' : 'genre-btn'}
          onClick={() => onGenreChange('')}
        >
          🎯 All Games
        </button>
        {genres.map(genre => (
          <button
            key={genre.name}
            className={selectedGenre === genre.name ? 'genre-btn active' : 'genre-btn'}
            onClick={() => onGenreChange(genre.name)}
          >
            {genre.icon} {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSidebar;