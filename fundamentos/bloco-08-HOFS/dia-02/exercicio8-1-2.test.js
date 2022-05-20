// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const Lottery = require('./exercicio8-1-2');

describe('Q2 - Desenvolva uma HOF que retorna o resultado de um sorteio', () => {
  it('Lottery é uma função?', () => {
    expect(typeof Lottery).toBe('function');
  });
  it('Ela retorna uma string?', () => {
    expect(typeof Lottery(1)).toBe('string');
  });
  it('Ela retorna um `Error: invalid input?` quando o usuário passar uma string?', () => {
    expect(Lottery('1')).toEqual('Error: invalid input');
  });
  it('Ela retorna um `Error: invalid input?` quando o usuário passar um número menor que 1 ou maior que 5?', () => {
    expect(Lottery(0)).toEqual('Error: invalid input');
    expect(Lottery(0.5)).toEqual('Error: invalid input');
    expect(Lottery(6)).toEqual('Error: invalid input');
    expect(Lottery(5.1)).toEqual('Error: invalid input');
    expect(Lottery(-2)).toEqual('Error: invalid input');
  });
})