
/* // sintaxe da função

function sayMyName(name) {  // Passagem de parametro nos parenteses
    console.log('Your name is: ' + name);
}


sayMyName('Renan'); // chama a função para ser executada, parenteses com passagem de parametro para a função
sayMyName('Vitor');

// função com retorno de valor

function quadrado(valor) {
    return valor * valor;
}

const quadrado_dez = quadrado(10);
console.log(quadrado_dez)

// função com duas passagens de parametro 

function incrementarJuros(valor, percentJuros) {
    const valorAcrecimo = (percentJuros /100) * valor;
    return valor + valorAcrecimo;
}

console.log(incrementarJuros(100, 10));  // passagem dos valores como parametro para a função

function main() {
    console.log('Progama principal!');
    incremetarJuros(100, 10); //chama função para a função principal
}

main();
*/



/*O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação 
sobre a condição de peso de uma pessoa adulta.

Formula do IMC :
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/
// Criando funções para calculo do IMC e classificar de acordo com o peso

function calcularImc(peso, altura) {
    return peso / (altura * altura);
}

function classificarImc(IMC) {
    if (IMC < 18.5) {
        return 'Ele está abaixo do peso!';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Ele está com o peso normal!';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Ele está acima do peso!';
    } else if (IMC >= 30 && IMC < 40) {
        return 'Ele está obeso!';
    } else {
        return 'Ele está com obesidade grave!';
    }
}

// Função principal do código, para começar a organizar

(function () {
    const peso = 130;
    const altura = 1.75;

    const IMC = calcularImc(peso, altura);

    console.log('Progama principal!');
    calcularImc(); //chama função para a função principal
    console.log(classificarImc(IMC));
})(); // colocando parenteses na função cria e ja executa, como main

