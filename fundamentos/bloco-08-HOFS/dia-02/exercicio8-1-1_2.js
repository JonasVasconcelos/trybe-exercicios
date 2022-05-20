/* const numeros = require('./exercicio8-1-1');

describe('Requisito 1', () => {
    it('A função recebe [1,2,3,4,5] e retorna true', () => {
        expect(true).toEqual(numeros([1,2,3,4,5]));
    });
}); */

/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const { describe } = require('yargs')
const inserirNome = require('./exercicio8-1-1')

describe('Q1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email }', () => {
  it('Exercicio é uma função?', () => {
    expect(typeof inserirNome).toBe('function');
  });
});