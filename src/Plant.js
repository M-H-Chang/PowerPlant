export {hydrate, sunlight, nutrients, genericPlant, increaseState};

const hydrate = (plant) => {
  return {
    ...plant,
    drinkWater: (plant.drinkWater || 0) + 1
  };
};

const sunlight = (plant) => {
  return {
    ...plant,
    absorb: (plant.absorb || 0) + 1 
  };
};

const nutrients = (plant) => {
  return {
    ...plant,
    intake: (plant.intake || 0) + 1
  };
};

const increaseState = (property) => {
  return (value) => {
    return (state) => ({
      ...state,
      [property]: (state[property] || 0) + value
    });
  };
};

const feed = increaseState("intake");
const drink = increaseState("drinkWater");
const giveLight = increaseState("absorb");



const genericPlant = (name) => {
  let state = {
    name
  };
  return {...state, ...hydrate(state), ...sunlight(state), ...nutrients(state)};
};

console.log(genericPlant);