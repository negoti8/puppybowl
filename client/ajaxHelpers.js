// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2207-FTB-ET-WEB-PT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    if (result.error) {
      throw result.error;
    }
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
    return singlePuppy.data.player;
  } catch (error) {
    console.error("Oops there was error fetching the single puppy", error);
  }
};

export const addNewPlayer = async (playerObj) => {};

export const removePlayer = async (playerId) => {};
