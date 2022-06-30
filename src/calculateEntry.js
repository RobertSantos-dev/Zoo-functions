const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const res = { adult: 0, child: 0, senior: 0 };
  entrants.forEach((e) => {
    if (e.age < 18) {
      res.child += 1;
    } else if (e.age >= 18 && e.age < 50) {
      res.adult += 1;
    } else { res.senior += 1; }
  });
  return res;
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) { return 0; }
  const obj = countEntrants(entrants);
  const mul = Object.values(prices);
  const res = Object.values(obj);
  res[0] *= mul[0];
  res[1] *= mul[2];
  res[2] *= mul[1];

  return res.reduce((acc, at) => acc + at);
}

module.exports = { calculateEntry, countEntrants };
