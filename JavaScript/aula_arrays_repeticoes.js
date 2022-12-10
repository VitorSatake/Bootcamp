

const alunos = ['Renan', 'Vitor', 'Marina']; // cria o array (lista)

// duas formas de inserir dados no array

alunos.push('Vinicius');
alunos[4] = 'Carlos';

console.log(alunos); // imprime o array inteiro

console.log(alunos[0]); // imprime por posição do array

// cria array vazio para inserir dados, pode ser dados diferentes

const alunos2 = [];

alunos2.push('teste');
alunos2.push(10);
alunos2.pop(); // remove o ultimo item da lista
alunos.pop();
alunos2.shift(); // remove o primeiro item da lista

console.log(alunos2);
console.log(alunos);


//lista de notas fazendo a media

const notas = [];

notas.push(8);
notas.push(8);
notas.push(8);
notas.push(8);
notas.push(8);
notas.push(8);

console.log(notas.length); // imprime a quantidade de itens da lista

// estrutura de repetição para percorrer a lista notas

let soma = 0;


for (let i = 0; i < notas.length; i++) { // for para percorrer o array notas e somar seus valores
    const nota = notas[i];
    soma = soma + nota;
    
}

console.log((soma / notas.length).toFixed(2)); // imprime a soma e divide pelo tamanho do array, tofixed para duas casa decimais





