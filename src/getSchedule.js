const data = require('../data/zoo_data');

const { species } = data;

let dias = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: [],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: [],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: [],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: '',
  },
};

const tabelaDias = () => {
  Object.keys(dias).forEach((e) => {
    species.forEach((e2) => {
      e2.availability.forEach((e3) => {
        if (e === 'Monday') {
          dias[e].exhibition = 'The zoo will be closed!';
        } else if (e === e3) {
          dias[e].exhibition.push(e2.name);
        }
      });
    });
  });
  return dias;
};

dias = tabelaDias();

const diaAnimal = (animal) => {
  const res = species.filter((e) => e.name === animal);
  if (res.length === 0) { return 0; }
  return res[0].availability;
};

const programaDia = (dia) => {
  const res = {};
  Object.keys(dias).forEach((e) => {
    if (e === dia) { res[e] = dias[e]; }
  });
  if (!dia || Object.entries(res).length === 0) {
    return 0;
  }
  return res;
};

function getSchedule(scheduleTarget) {
  const res = diaAnimal(scheduleTarget);
  const res2 = programaDia(scheduleTarget);
  if (res === 0 && res2 === 0) {
    return dias;
  }
  if (!res && res2) { return res2; }
  return res;
}

module.exports = getSchedule;
