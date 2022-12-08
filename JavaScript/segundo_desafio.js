/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 5 variáveis. Sendo ela:

- 1 Preço do do etanol;
- 2 Preço da gasolina;
- 3 O tipo de combustível que está no seu carro;
- 4 Gasto médio de combustível do carro por KM;
- 5 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 7.89;
const tipoCombustivel = 'Etanol';
const Km_por_litro = 7;
const distanciaViagemKm = 100; 

const valorGastoGasolina = (distanciaViagemKm/Km_por_litro)*precoGasolina;
const valorGastoEtanol = (distanciaViagemKm/Km_por_litro)*precoEtanol;

if (tipoCombustivel === 'Gasolina') {
    console.log('O valor gasto nessa viagem utizando Gasolina é de : R$ ' + valorGastoGasolina.toFixed(2) + '.'); //tofixed() casas decimais
} else if (tipoCombustivel === 'Etanol') {
    console.log('O valor gasto nessa viagem utizando Etanol é de : R$  ' + valorGastoEtanol.toFixed(2) + '.'); //tofixed() casas decimais
} else {
    console.log('Insira um tipo de combustível válido, Etanol ou Gasolina !');
}

