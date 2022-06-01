/* const uppercase = require('./ex01')

describe('Verifica se a função uppercase transforma as letras em maiúsculas.',() => {
  it('Testa se jonas retorna JONAS', (done) => {
    uppercase('jonas', (call) => {
      expect(call).toBe('JONAS');
      done();
    })
  });
  it('Testa se abc retorna ABC', (done) => {
    uppercase('abc', (call) => {
      expect(call).toBe('ABC');
      done();
    })
  })
}) */


// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex01");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, result) {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    function callback(error, result) {
      expect(result).toEqual(expected);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
    });
});