/* const numeros = require('./exercicio8-1-1');

describe('Requisito 1', () => {
    it('A função recebe [1,2,3,4,5] e retorna true', () => {
        expect(true).toEqual(numeros([1,2,3,4,5]));
    });
}); */

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const retorno = require('./exercicio8-1-1')

describe('Q1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email }', () => {
  it('Exercicio é uma função?', () => {
    expect(typeof retorno).toBe('function');
  });
  it('Retorna uma string?', () => {
    expect(retorno('Jonas')).toEqual({'NomeCompleto': 'Jonas', 'email': 'jonas@trybe.com'});
  });
  it('Retorna false se não houve string?', () => {
    expect(retorno('')).toBe(false);
  });
  it('Retorna false se o usuário passar um número?', () => {
    expect(retorno(0)).toBe(false);
    expect(retorno(-1)).toBe(false);
    expect(retorno(10)).toBe(false);
    expect(retorno(2.420)).toBe(false);
  });
});