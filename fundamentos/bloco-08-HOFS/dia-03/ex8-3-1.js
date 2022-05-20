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

// ------------------------------------------------------------------
//// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const rename = (item) => {
  return `${item.name.toUpperCase().replace(/\s/g, '_',)} - ${item.genre.toUpperCase().replace(/\s/g, '_')} - ${item.author.name.toUpperCase().replace(/\s/g, '_')}`
}

// console.log(books.map(rename))

// ------------------------------------------------------------------
//// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

////Dica: use as funções map, sort

const nameAge = (item) => {
  const arr = {};
  arr.age = item.releaseYear - item.author.birthYear;
  arr.author = item.author.name; 
  return arr
}

// console.log(books.map(nameAge).sort((a,b) => a.age - b.age))

// ------------------------------------------------------------------
//// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
//// Dica: use a função filter;

/* const ficFan = books.filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia')
console.log(ficFan) */

// ------------------------------------------------------------------
//// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
//// Dica: use as funções filter e sort

// console.log(books.filter((item) => 2022 - item.releaseYear > 60).sort((a, b) => a.releaseYear - b.releaseYear))

// ------------------------------------------------------------------
//// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
 
/* console.log(books
  .filter((item) => item.genre === 'Ficção Científica' || item.genre === 'Fantasia')
  .sort((a, b) => +(a.author.name > b.author.name) || +(a.author.name === b.author.name) - 1)) */

//// ------------------------------------------------------------------
////  🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

/* const oldBooks = (item) => {
  return 2022 - item.releaseYear > 60
}
console.log(books.filter(oldBooks).map((item) => item.name))
 */

//// ------------------------------------------------------------------
//// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
////Dica: cada inicial termina com um ponto.

/* console.log(books
  .filter((item) => {
   return item.author.name[1] === '.' &&
    item.author.name[4] === '.' &&
    item.author.name[7] === '.'
  })[0].author.name)
 */

/* console.log(books
  .find((item) => (
    item.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name) */

  