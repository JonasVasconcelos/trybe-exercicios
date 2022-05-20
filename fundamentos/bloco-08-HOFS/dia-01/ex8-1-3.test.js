// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const yearFilter = require('./ex8-1-3');
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

describe('Uma função que filtra o nome do autor a partir do ano de nascimento', () => {
  it('yearFilter é uma função?', () => {
    expect(typeof yearFilter).toBe('function');
  });
  it('Verifica se retorna H. P. Lovecraft para year = 1890', () => {
    expect(yearFilter(books, 1890)).toBe('H. P. Lovecraft');
  });
  it('Verifica se retorna Stephen King para year = 1947', () => {
    expect(yearFilter(books, 1947)).toBe('Stephen King');
  });
  it('Verifica se retorna Isaac Asimov para year = 1920', () => {
    expect(yearFilter(books, 1920)).toBe('Isaac Asimov');
  });
  it('Verifica se retorna erro para um ano inválido', () => {
    expect(yearFilter(books, 1)).toBe(undefined);
  });
})