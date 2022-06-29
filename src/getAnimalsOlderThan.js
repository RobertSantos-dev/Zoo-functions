const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const obj1 = data.species.filter((e) => (e.name === animal));
  return obj1[0].residents.every((e) => e.age >= age);
}

module.exports = getAnimalsOlderThan;
