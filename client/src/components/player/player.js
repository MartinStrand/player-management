import React, { useState } from 'react';
import './styles.css'
const Player = ({id, name, updatePlayer, deletePlayer}) => {
const [newName, setNewName] = useState("");

const updateName = () => {
    if (!newName) return;

    updatePlayer(id, newName)
}

return(
<div className="container" key={id}> <div className="nameBox">{name} </div><div className="btnBox"><button className="deleteBtn" onClick={() => deletePlayer(id)}>Delete</button></div>
    <div className="updatePlayer">
        <input
            placeholder="Replace player name"
            type="text" 
            onChange={event => setNewName(event.target.value)}
            />
            <button onClick={updateName}>Update</button>
    </div>
</div>
)}
export default Player;