// 1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;

const hasName = require('./ex8-2-1');

describe('Q1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false', () => {
  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  it('hasName é uma função?', () => {
    expect(typeof hasName).toBe('function');
  });
  it('Verifica se retorna `true` quando passar `Ana`', () => {
    expect(hasName(names, 'Ana')).toEqual(true);
  });
  it('Verifica se retorna `true` quando passar `José`', () => {
    expect(hasName(names, 'José')).toEqual(true);
  });
  it('Verifica se retorna `false` quando passar `Paulo`', () => {
    expect(hasName(names, 'Paulo')).toEqual(false);
  });
})