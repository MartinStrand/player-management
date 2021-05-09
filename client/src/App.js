import React, { useState, useEffect } from 'react';
import './App.css';
import Player from './components/player/player.js';
import * as API from "./services/api"


function App() {

  const [players, setPlayers] = useState([]);
  const [name,setNewPlayer] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch('/players')
      const data = await response.json();
      setPlayers(data);
    }
    fetchPlayers();
  }, []);
  
  async function addPlayer() {
    const player = await API.addPlayer(name);

    setPlayers([...players, player]);
  }

  async function deletePlayer(id) {
    const removedPlayer = await API.deletePlayer(id)

    const index = players.indexOf(players.find(player => player.id === removedPlayer.id))
    players.splice(index, 1)
    setPlayers([...players])
  }

  async function updatePlayer(id, name) {

    const updatedPlayer = await API.updatePlayer(id, name)
    players.find(player => player.id === updatedPlayer.id).name = updatedPlayer.name;
    setPlayers([...players])
  }

    return (
      <div className="App">
        <div className="newPlayer">
          <h3>Add new player:</h3>
            <input 
              type="text" 
              value={name} 
              onChange={event => setNewPlayer(event.target.value)}
              />
          <button onClick={addPlayer}>+</button>
        </div>
        <hr></hr>
        <h1>Players ({players.length})</h1>
        {players.map(player =>
          <Player key={player.id} name={player.name} id={player.id} updatePlayer={updatePlayer} deletePlayer={deletePlayer} />
        )}
      </div>
    );
  }

export default App;
