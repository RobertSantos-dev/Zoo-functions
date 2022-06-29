const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const res = [];
  ids.forEach((v) => {
    data.species.filter((e) => (e.id === v ? res.push(e) : ''));
  });
  return res;
}

module.exports = getSpeciesByIds;
