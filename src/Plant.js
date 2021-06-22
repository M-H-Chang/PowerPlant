export {stateControl, blueFood, feed, hydrate, superhydrate, storeState, increaseState};

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState(); //holds inner function

const increaseState = (property) => {
  return (value) => {
    return (state) => ({
      ...state,
      [property]: (state[property] || 0) + value
    });
  };
};

// const genericPlant = (name) => {
//   let state = {
//     name
//   };
//   return {...state, ...hydrate(state), ...sunlight(state), ...nutrients(state)};
// };

const feed = increaseState("intake")(1);
const blueFood = increaseState("intake")(5);

const hydrate = increaseState("drinkWater")(1);
const superhydrate = increaseState("drinkWater")(5);

const fedPlant = stateControl(blueFood);
console.log(fedPlant);



// ***The code below was dried up by the function above "increaseState"***
// const hydrate = (plant) => {
//   return {
//     ...plant,
//     drinkWater: (plant.drinkWater || 0) + 1
//   };
// };

// const sunlight = (plant) => {
//   return {
//     ...plant,
//     absorb: (plant.absorb || 0) + 1 
//   };
// };

// const nutrients = (plant) => {
//   return {
//     ...plant,
//     intake: (plant.intake || 0) + 1
//   };
// };


//const feed = increaseState("intake");
// const drink = increaseState("drinkWater");
// const giveLight = increaseState("absorb");




