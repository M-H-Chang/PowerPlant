import{hydrate, sunlight, nutrients, genericPlant, increaseState} from './../src/Plant.js';

describe('hydrate', () => {
  test('increases drinkwater by 1', () => {
    let plant = {};
    const testHydrate = hydrate(plant);
    expect(testHydrate).toEqual({"drinkWater": 1});
  });
});

describe('sunlight', () => {
  test('increases absorb by 1', () => {
    let plant = {};
    const testSunlight = sunlight(plant);
    expect(testSunlight).toEqual({"absorb": 1});
  });
});

describe('nutrients', () => {
  test('increases intake by 1', () => {
    let plant = {};
    const testNutrients = nutrients(plant);
    expect(testNutrients).toEqual({"intake": 1});
  });
});

describe('genericPlant', () => {
  test('returns all properties at 1', () => {
    let name = {};
    const namePlant = genericPlant(name);
    expect(namePlant).toEqual({name,"drinkWater": 1, "absorb": 1, "intake": 1});    
  });
});

describe('increaseState', () => {
  test('returns specified state', () => {
    let plant = {};
    const mediumFood = increaseState("intake")(3);
    expect(mediumFood(plant)).toEqual({"intake": 3});
  });
});