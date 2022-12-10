
// Importação das funçoes, do arquivo funcoes_auxiliares

//const funcoes = require('./funcoes_auxiliares');

//console.log(funcoes); // imprime tudo que foi importado das funçoes

//console.log(funcoes.gets()); // imprime especifico o resultado da função

// Outra forma de importar
const { gets, print } = require('./funcoes_auxiliares');

//print(gets());

// Exercicio 

/* 

Uma sala de aula contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:

  5;
  50;
  10;
  98;
  23;

Saída:

  98;

*/


const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
