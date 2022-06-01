//// 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2, 15 e 54.

/* const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)) // altere a chamada da funcao rectangleArea
  console.log(rectangle[0] * rectangle[1]);
}); */
// ----------------------------------------------

// ----------------------------------------------
//// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

/* const sum = (...rest) => {
  return rest.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(4,2,5,1,6,8)) */
// ----------------------------------------------

// ----------------------------------------------
//// 3 - Escreva a função personLikes, que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

/* const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = (person) => {
  let {name, age, likes, nationality} = person;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`;
}

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.' */
// ----------------------------------------------

// ----------------------------------------------
//// 🚀 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
//// Dica: use object destructuring.

/* const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (nationality, bornIn) => {
  return people
  .map((item) => {
    let {name, bornIn, nationality} = item
    return [name, bornIn, nationality];
  })
  .filter((item) => item[2] === nationality && item[1] < bornIn)
}  


console.log(filterPeople('Australian', 2001)) */
// ----------------------------------------------

// ----------------------------------------------
//// 5 - Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
//// Dica: use array destructuring.

