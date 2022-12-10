// 1 - Crie um programa que dado um número imprima a sua tabuada
num = 5;

for (let i = 1; i <= 10; i++) { // for para percorrer o array notas e somar seus valores
    mult = i * num;
    console.log(mult.toFixed(2)); 
}

// 2 - Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero encontrado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++) {
    const imprimir = numeros[i];
    console.log(imprimir);
}
