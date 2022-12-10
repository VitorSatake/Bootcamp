
// Importação das funçoes, do arquivo funcoes_auxiliares

//const funcoes = require('./funcoes_auxiliares');

//console.log(funcoes); // imprime tudo que foi importado das funçoes

//console.log(funcoes.gets()); // imprime especifico o resultado da função

// Outra forma de importar
const { gets, print } = require('./funcoes_auxiliares');

print(gets());
