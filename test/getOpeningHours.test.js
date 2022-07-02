const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Teste se caso função não receber nem um parametro deve retornar o objeto hours', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });

  test('Teste se caso função não receber nem um parametro, não deve retornar um unico objeto', () => {
    const expected = { Monday: { open: 0, close: 0 } };
    expect(getOpeningHours()).not.toEqual(expected);
  });

  test('Teste se a função retorna Closed se o dia passado for Monday as 22h', () => {
    const expected = 'The zoo is closed';
    const actual = getOpeningHours('Monday', '10:00-PM');
    expect(actual).toBe(expected);
  });

  test('Teste se a função retorna Open se o dia passado for Saturday as 20h30', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('SaTurDay', '08:30-PM');
    expect(actual).toBe(expected);
  });

  test('Teste se a função retorna Closed se o dia passado for Saturday as 23h20', () => {
    const expected = 'The zoo is open';
    const actual = getOpeningHours('Sunday', '11:20-PM');
    expect(actual).not.toBe(expected);
  });

  test('Teste se a função retorna Error se o dia passado não for valido', () => {
    const expected = 'The day must be valid. Example: Monday';
    const actual = () => { getOpeningHours('SUnd', '10:00-PM'); };
    expect(actual).toThrow(expected);
  });

  test('Teste se a função retorna Error se a Abbreviation não for valida', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    const actual = () => { getOpeningHours('SUndAy', '10:00-PNG'); };
    expect(actual).toThrow(expected);
  });

  test('Teste se a função retorna Error em Hour se no lugar de Numero for atribuido uma letra', () => {
    const what = 'hour';
    const expected = `The ${what} should represent a number`;
    const actual = () => { getOpeningHours('Tuesday', '0b:30-AM'); };
    expect(actual).toThrow(expected);
  });

  test('Teste se a função retorna Error em Minutes se no lugar de Numero for atribuido uma letra', () => {
    const what = 'minutes';
    const expected = `The ${what} should represent a number`;
    const actual = () => { getOpeningHours('Thursday', '08:R0-AM'); };
    expect(actual).toThrow(expected);
  });

  test('Teste se a função retorna Error caso Hour seja acima de 12h', () => {
    const expected = 'The hour must be between 0 and 12';
    const actual = () => { getOpeningHours('Friday', '13:30-AM'); };
    expect(actual).toThrow(expected);
  });

  test('Teste se a função retorna Error caso Minutes seja acima de 59min', () => {
    const expected = 'The minutes must be between 0 and 59';
    const actual = () => { getOpeningHours('Wednesday', '11:60-AM'); };
    expect(actual).toThrow(expected);
  });
});
