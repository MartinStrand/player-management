import React, { useState } from 'react';

const Player = ({id, name, updatePlayer, deletePlayer}) => {
const [newName, setNewName] = useState("");

const updateName = () => {
    if (!newName) return;

    updatePlayer(id, newName)
}

return(
<div key={id}>{name}<button onClick={() => deletePlayer(id)}>Delete</button>
<input 
    type="text" 
    onChange={event => setNewName(event.target.value)}
    />
    <button onClick={updateName}>Update</button>
</div>
)}
export default Player;