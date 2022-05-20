// 2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;

const { type } = require("os");

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  if (typeof Number(minimumAge) !== 'number' || Number.isNaN(Number(minimumAge))) {
    return 'Error: minimumAge should be a number.'
  } else if (minimumAge > 0) {
    return arr.every((item) => item.age >= minimumAge)
  } else 
    return 'Error: minimumAge should be greater than zero.'
}

module.exports = verifyAges;
