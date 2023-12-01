import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../API';
import { useNavigate } from 'react-router-dom';
import NewPlayerForm from './NewPlayerForm';

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers() {
      try {
        const nextPlayers = await fetchPlayers();
        setPlayers(nextPlayers);
      } catch (err) {
        console.error(err);
      }
    }
    getPlayers();
  }, []);

  const handleAddPlayer = async (newPlayer) => {
    // Add the new player directly to the state
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    // Navigate back to the home page after adding a new player
    navigate('/');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter players based on the search term
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id="players-container">
      {/* Render the NewPlayerForm and pass the handleAddPlayer function */}
      <NewPlayerForm onNewPlayer={handleAddPlayer} />

      {/* Render the search input */}
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Render the list of players */}
      {filteredPlayers.map((player, index) => (
        <div className="player-card" key={index}>
          <h1>{player.name}</h1>
          <img src={player.imageUrl} alt={`picture of ${player.name}`} />
          <button onClick={() => navigate(`/players/${player.id}`)}>See Details</button>
          <button>Remove From Roster</button>
        </div>
      ))}
    </div>
  );
}