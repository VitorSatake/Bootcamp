

/*Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo ela:

- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const Km_por_litro = 7;
const distanciaViagemKm = 100; 

const valorGasto = (distanciaViagemKm/Km_por_litro)*precoCombustivel;

console.log('O valor gasto nessa viagem é de : R$ ' + valorGasto.toFixed(2)); //tofixed() casas decimais 


