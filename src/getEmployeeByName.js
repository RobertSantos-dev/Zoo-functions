const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const res = data.employees.filter((e) => {
    const { firstName, lastName } = e;
    return firstName === employeeName || lastName === employeeName ? e : '';
  });
  return res.length > 0 ? res[0] : {};
}

module.exports = getEmployeeByName;
