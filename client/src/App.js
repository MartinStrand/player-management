import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [players, setPlayers] = useState([]);
  const [name,setNewPlayer] = useState([]);
  console.log(players, "spelare")

  useEffect(() => {
    async function fetchPlayers() {
      const response = await fetch('/players')
      const data = await response.json();
      console.log(data)
      setPlayers(data);
    }
    fetchPlayers();
  }, []);
  
  async function addPlayer() {
    const playerName = { "name": name };
    const response = await fetch('/player', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(playerName)
    }).then()
  }

  async function deletePlayer(id) {
    const response = await fetch(`/player/${id}`,  {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const removedPlayer = await response.json();
    console.log(removedPlayer);
  }

  async function updatePlayer(id) {
    const response = await fetch(`/player/${id}`,  {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

    return (
      <div className="App">
        <h1>Players</h1>
        {players.map(player =>
          <div key={player.id}>{player.name}<button onClick={() => deletePlayer(player.id)}>Delete</button></div>
        )}
        <div>
          <label>
            Add player:
            <input 
              type="text" 
              value={name} 
              onChange={event => setNewPlayer(event.target.value)}
              />
          </label>
          <button onClick={addPlayer}>Add</button>
        </div>
      </div>
    );
  }

export default App;
