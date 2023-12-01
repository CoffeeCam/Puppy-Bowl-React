import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewPlayerForm = ({ onNewPlayer }) => {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !breed || !status) {
      alert('Please fill all the fields');
      return;
    }

    const newPlayer = {
      name,
      breed,
      status,
    };
    onNewPlayer(newPlayer);
    setName('');
    setBreed('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <br />
      <label>
        Status:
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Player</button>
    </form>
  );
};

NewPlayerForm.propTypes = {
  onNewPlayer: PropTypes.func.isRequired,
};

export default NewPlayerForm;