const cohortName = '2306-FTB-MT-WEB-PT';
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchPlayers = async () => {
  try {
    const rsp = await fetch(`${API_URL}/players`);
    const json = await rsp.json();
    return json.data.players;
  } catch (err) {
    console.error(err);
  }
};

export const fetchSinglePlayer = async (playerID) => {
  try {
    const rsp = await fetch(`${API_URL}/players/${playerID}`);
    const json = await rsp.json();
    return json.data.player;
  } catch (err) {
    console.error(err);
  }
};

export const addPlayer = async (playerObj) => {
  try {
    const rsp = await fetch(`${API_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerObj),
    });
  } catch (error) {
    console.error(error);
  }
};