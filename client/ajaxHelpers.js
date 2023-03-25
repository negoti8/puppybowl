import {
  renderNewPlayerForm,
  renderSinglePlayer,
  renderAllPlayers,
} from "./renderHelpers";

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2301-FTB-ET-WEB-AM";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
    renderAllPlayers();
    console.log(1);
    return result.data.players;
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", error);
  }
};

export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`);
    const singlePuppy = await response.json();
    console.log(singlePuppy);
    renderSinglePlayer();
    console.log(2);
    return singlePuppy.data.player;
  } catch (error) {
    console.error("Oops there was error fetching the single puppy", error);
  }
};

export const addNewPlayer = async (playerObj) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    console.log(3);
    const NewPlayer = response.json();
    if (NewPlayer.error) throw NewPlayer.error;
    renderNewPlayerForm();
    return NewPlayer.data.player;
  } catch (error) {
    console.error("Oops there was error creating new player", error);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: "DELETE",
    });
    const deletedPuppy = await response.json();
    if (deletedPuppy.error) throw deletedPuppy.error;
    console.log(4);
    return;
  } catch (error) {
    console.error(
      `Oops, an error deleting a player #${playerId} from the roster! `,
      error
    );
  }
};
