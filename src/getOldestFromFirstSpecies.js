const data = require('../data/zoo_data');

const { employees, species } = data;

const procv = (id) => employees.filter((e) => e.id.includes(id))[0].responsibleFor;
const procv2 = (arr) => species.find((e) => arr.find((e2) => e2 === e.id));
const resEnd = (arr) => {
  const res = [];
  const obj = arr.residents.reduce((acc, at) => (at.age > acc.age ? at : acc));
  Object.values(obj).forEach((e) => res.push(e));
  return res;
};

function getOldestFromFirstSpecies(id) {
  const res = procv2(procv(id));
  return resEnd(res);
}

module.exports = getOldestFromFirstSpecies;
