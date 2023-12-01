import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AllPlayers from './components/Allplayers';
import NavBar from './components/NavBar';
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayer from './components/SinglePlayer';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  const handleNewPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers players={players} />} />
        <Route
          path="/players/:playerId"
          element={<SinglePlayer />}
        />
        <Route
          path="/new"
          element={<NewPlayerForm onNewPlayer={handleNewPlayer} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;