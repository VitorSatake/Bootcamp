/*

O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação 
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

const peso = 63;
const altura = 1.75;

const IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log('O IMC é : ' + IMC.toFixed(2) + '. Ele está abaixo do peso!');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('O IMC é : ' + IMC.toFixed(2) + '. Ele está com o peso normal!');
} else if (IMC >= 25 && IMC < 30) {
    console.log('O IMC é : ' + IMC.toFixed(2) + '. Ele está acima do peso!');
} else if (IMC >= 30 && IMC < 40) {
    console.log('O IMC é : ' + IMC.toFixed(2) + '. Ele está obeso!');
} else {
    console.log('O IMC é : ' + IMC.toFixed(2) + '. Ele está com obesidade grave!');
}
