const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  test('Teste se retorna undefined, caso a função não receber nem uma parâmentro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Teste se retorna erro caso o parâmetro passado não seja string', () => {
    const testar = handlerElephants(4);
    const res = 'Parâmetro inválido, é necessário uma string';
    expect(testar).toBe(res);
  });

  test('Teste se retorna um array com o nome de todos os elefantes', () => {
    const testar = handlerElephants('names');
    const res = [
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ];
    expect(testar).toEqual(res);
  });

  test('Teste se NÃO retorna um array com o nome de todos os elefantes', () => {
    const testar = handlerElephants('averageAge');
    const res = [
      'Ilana',
      'Orvaldo',
      'Bean',
      'Jefferson',
    ];
    expect(testar).not.toEqual(res);
  });

  test('Teste se retorna o nome do unico animal que estamos trabalhando', () => {
    const testar = handlerElephants('name');
    const res = 'elephants';
    expect(testar).toBe(res);
  });

  test('Teste se o retorno da media é o esperado', () => {
    const testar = handlerElephants('averageAge');
    let res = species.filter((e) => (e.name === 'elephants'));
    res = res[0].residents.map((e) => e.age);
    res = res.reduce((acc, mod) => acc + mod) / res.length;
    expect(testar).toEqual(res);
  });

  test('Teste se o retorno da quantidade de animais é o esperado', () => {
    const testar = handlerElephants('count');
    let res = species.filter((e) => (e.name === 'elephants'));
    res = res[0].residents.length;
    expect(testar).toEqual(res);
  });

  test('Teste se o retorno, com um parâmentro desconhecido, é Nulo', () => {
    const testar = handlerElephants('testNULL');
    expect(testar).toBeNull();
  });
});
