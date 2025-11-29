import React, { useState, useEffect } from 'react';
import { getGames } from './services/api';
import Header from './components/Header';
import Filters from './components/Filters';
import GenreSidebar from './components/GenreSidebar';
import './App.css';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    const fetchGames = async () => {
      const gamesData = await getGames();
      setGames(gamesData);
    };
    fetchGames();
  }, []);

  const filteredGames = games
    .filter(game =>
      game.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === '' || game.genres?.some(genre => genre.name === selectedGenre)) &&
      (selectedPlatform === '' || game.platforms?.some(platform => platform.platform.name.includes(selectedPlatform)))
    )
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'released') return new Date(b.released) - new Date(a.released);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="App">
      <Header onSearch={setSearchTerm} />
      <Filters 
        onPlatformChange={setSelectedPlatform}
        onSortChange={setSortBy}
      />
      <div className="main-content">
        <GenreSidebar 
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        <div className="games-container">
          {filteredGames.map(game => (
            <div key={game.id} className="game-card">
              <img src={game.background_image} alt={game.name} />
              <h3>{game.name}</h3>
              <p>⭐ Rating: {game.rating}</p>
              <p>📅 Released: {new Date(game.released).getFullYear()}</p>
              <p>🎮 Genres: {game.genres?.map(g => g.name).join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;