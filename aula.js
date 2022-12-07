
/* Variáveis e operadores

let variavel = 10 + 10; // variavel let pode ser atribuido outro valor depois
const pi = 3.14; // variavel const nao pode ser alterado seu valor



console.log(variavel)

*/

// Condicionais

/*const valor = 20;
console.log(valor < 10)*/

const numero = 2;

const numeroPar = (numero % 2) === 0; // resto da divisao por 2 igual a 0, confirma numero par

if (numero === 0) { // testa primeira condição, se for, executa, senão vai para a próxima e assim por diante
    console.log('O numero é inválido.');
} else if (numeroPar) { // testa segunda condição, pode usar quantos else if necessários
    console.log('O numero é par.');
} else { // testa terceira condição
    console.log('O numero é impar.');
}  
