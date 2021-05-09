export async function addPlayer(name) {
    const playerName = { "name": name };
    const response = await fetch('/player', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(playerName)
    });

    const player = response.json();
    return player;
    }

export  async function deletePlayer(id) {
    const response = await fetch(`/player/${id}`,  {
        method: 'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    })
    const removedPlayer = response.json();
    return removedPlayer;
}

export async function updatePlayer(id, name) {
    const newPlayerName = { "name": name };
    const response = await fetch(`/player/${id}`,  {
        method: 'PUT',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPlayerName)
    });
    const updatedPlayer = response.json();
    return updatedPlayer;
}