const data = require('../data/zoo_data');

const cond = (animal) => {
  let res = 0;
  const val = Object.values(animal);
  data.species.forEach((e) => {
    if (val.length === 1 && e.name === val[0]) {
      res = e.residents.length;
    }
    e.residents.forEach((v) => {
      if (e.name === val[0] && v.sex === val[1]) {
        res += 1;
      }
    });
  });
  return res;
};

function countAnimals(animal) {
  const obj = {};
  if (!animal) {
    data.species.forEach((e) => {
      obj[e.name] = e.residents.length;
    });
    return obj;
  }
  return cond(animal);
}

module.exports = countAnimals;
