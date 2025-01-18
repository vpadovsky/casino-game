import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameList: React.FC = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [search, setSearch] = useState('');
  console.log('games', games);
  useEffect(() => {
    fetchGames();
  }, [search]);

  const fetchGames = async () => {
    try {
      const endpoint = search ? `/games/search?q=${search}` : '/games';
      const response = await axios.get(`http://localhost:3000${endpoint}`);
      setGames(response.data);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Game List</h2>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded mb-4 w-full"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4">
        {games.map((game) => {
          return (
            <div key={game.id} className="p-4 bg-white rounded shadow">
              {game.thumb && (
                <img
                  src={game.thumb.url}
                  alt={game.title}
                  className="w-full h-32 object-cover rounded"
                />
              )}
              <h3 className="mt-2 text-lg font-bold">{game.title}</h3>
              <p className="text-sm text-gray-500">{game.providerName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GameList;
