// arquivo script.js

/* console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> */

let elemento = document.getElementById('elementoOndeVoceEsta');
let teste = document.createElement('li');
teste.innerHTML = 'teste';

elemento.appendChild(teste)
