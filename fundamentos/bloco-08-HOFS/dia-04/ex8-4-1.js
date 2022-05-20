// ----------------------------------------------
// Exemplo da internet
/* const numeros = [10, 20, 30, 40, 50];

const total = numeros.reduce((acc, curr) => {
  console.log(acc, curr)
  return acc + curr
})

console.log(total) */
// ----------------------------------------------

// ----------------------------------------------
// Exemplo da internet.2

/* const palavras = ['Olaaaasdasdasdar', 'oi', 'paralelepipedo'];

const maiorPalavra = palavras.reduce((acc, curr) => {
  if (curr.length > acc.length) {
    return curr;
  }

  return acc;
}, '');

console.log(maiorPalavra) */
// ----------------------------------------------

// ----------------------------------------------
//// 1 - Dada uma matriz, transforme em um array.

/* const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => acc.concat(curr),[])
}

console.log(flatten())
 */
// ----------------------------------------------

// ----------------------------------------------
////Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

/* const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

console.log(numbers
  .filter((item) => item % 2 === 0)
  .reduce((acc, curr) => acc + curr)
) */
// ----------------------------------------------

// ----------------------------------------------
//// Para os exercícios 2, 3 e 4 considere o seguinte template:

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

//// 2 - Crie uma string com os nomes de todas as pessoas autoras.

/* const reduceNames = () => {
  return books.reduce((acc, curr, index, array) => {
    if ( index === array.length -1 ) {
      return `${acc}${curr.author.name}` + '.'
    } else {
      return `${acc}${curr.author.name}, `
    }
  }, '')
}

console.log(reduceNames()) */
// ----------------------------------------------

// ----------------------------------------------
//// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

/* const averageAge = () => {
  return books
    .map((item) => item.releaseYear - item.author.birthYear)
    .reduce((acc, curr) => acc + curr, 0) / books.length;
}

console.log(averageAge()) */
// ----------------------------------------------

// ----------------------------------------------
//// 4 - Encontre o livro com o maior nome.

/* const longestNameBook = () => {
  return books
    .reduce((acc, curr) => {
      return acc.length > curr.name.length ? acc : curr.name
    }, '')
}

console.log(longestNameBook()) */
// ----------------------------------------------

// ----------------------------------------------
//// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

/* const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names
    .map((item) => item.toLowerCase().split('a').length-1)
    .reduce((acc, curr) => acc + curr, 0)
}

console.log(containsA()) */
// ----------------------------------------------

// ----------------------------------------------
//// 6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

/* const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((item, index) => ({
    name: item,
    average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length
  }), {});
}

console.log(studentAverage()) */

