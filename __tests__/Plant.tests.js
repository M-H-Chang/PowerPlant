import{hydrate, sunlight, nutrients, genericPlant} from './../src/Plant.js';

describe('hydrate', () => {
  test('increases drinkwater by 1', () => {
    let plant = {};
    const testHydrate = hydrate(plant);
    expect(testHydrate).toEqual({"drinkWater": 1});
  });
});