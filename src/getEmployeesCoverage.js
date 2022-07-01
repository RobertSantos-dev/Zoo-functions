const data = require('../data/zoo_data');

const { employees, species } = data;

const job = (param) => {
  const res = [];
  param.forEach((e) => {
    species.forEach((e2) => (e2.id.includes(e) ? res.push(e2.name) : res));
  });
  return res;
};

const local = (param) => {
  const res = [];
  param.forEach((e) => {
    species.forEach((e2) => (e2.id.includes(e) ? res.push(e2.location) : res));
  });
  return res;
};

// Função para mostra a tabela com todas as informações nescessarias
const tabelaEmplyees = () => employees.map((e) => ({
  id: e.id,
  fullName: `${e.firstName} ${e.lastName}`,
  species: job(e.responsibleFor),
  locations: local(e.responsibleFor),
}));

const retName0 = (table, value) => table.filter((e) => e.id.includes(value[0]))[0];

const retName1 = (table, value) => {
  let res;
  const ver = table.map((e) => e.fullName.split(' '));
  ver.forEach((e, i) => {
    e.forEach((e2) => {
      if (e2 === value[0]) { res = table[i]; }
    });
  });
  return res;
};

const retName = (obj) => {
  const table = tabelaEmplyees();
  const key = Object.keys(obj);
  const value = Object.values(obj);
  if (key[0] === 'id') {
    return retName0(table, value);
  }
  return retName1(table, value);
};

function getEmployeesCoverage(obj) {
  if (!obj) { return tabelaEmplyees(); }
  if (retName(obj) === undefined) {
    throw new Error('Informações inválidas');
  }
  return retName(obj);
}

module.exports = getEmployeesCoverage;
