// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const verifyAges = require('./ex8-1-2');

describe('Q2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false', () => {
  const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  it('verifyAges é uma função?', () => {
    expect(typeof verifyAges).toBe('function');
  });
  it('verifyAges retorna um boolean?', () => {
    expect(typeof verifyAges(people, 18)).toEqual('boolean');
  });
  it('verifyAges retorna false quando passar minimumAge = 18?', () => {
    expect(verifyAges(people, 18)).toEqual(false);
  });
  it('verifyAges retorna true quando passar minimumAge = 15?', () => {
    expect(verifyAges(people, 15)).toEqual(true);
  });
  it('Verifica se verifyAges retorna erro quando minimumAges <= 0 ', () => {
    expect(verifyAges(people, 15)).toEqual(true);
    expect(verifyAges(people, 0.1)).toEqual(true);
    expect(verifyAges(people, 0)).toEqual('Error: minimumAge should be greater than zero.');
    expect(verifyAges(people, -2)).toEqual('Error: minimumAge should be greater than zero.');
  });
  it('Verifica se minimumAges aceita um número como string', () => {
    expect(verifyAges(people, '15')).toEqual(true);
  });
  it('Verifica se minimumAges aceita uma string', () => {
    expect(verifyAges(people, 'teste')).toEqual('Error: minimumAge should be a number.');
  });
  it('Verifica se minimumAges aceita um array', () => {
    expect(verifyAges(people, [16, 19])).toEqual('Error: minimumAge should be a number.');
    expect(verifyAges(people, [0, 0.2, -4])).toEqual('Error: minimumAge should be a number.');
  });

})