const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(...id) {
  let res = false;
  id.forEach((e) => {
    if (e === stephanieId || e === olaId || e === burlId) {
      res = true;
    }
  });
  return res;
}

function getRelatedEmployees(managerId) {
  const r = [];
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  data.employees.forEach((e) => {
    e.managers.forEach((v) => {
      if (v === managerId) { r.push(`${e.firstName} ${e.lastName}`); }
    });
  });
  return r;
}

module.exports = { isManager, getRelatedEmployees };
