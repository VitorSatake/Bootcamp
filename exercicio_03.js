/* 

Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o calculo adequado.

Código Condição de Pagamento:
 - À vista Débito, recebe 10% de desconto;
 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - Em duas vezes, preço normal de etiqueta sem juros;
 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

 */

 const preco = 100;

 const formaPag = 4;

 //const 1 = preco - (preco*0.1);
 //const 2 = preco - (preco*0.15);
 //const 3 = preco;
 //const 3 = preco + (preco*0.1);

 if (formaPag === 1) {
    console.log('O preço a ser pago é : ' + (preco - (preco*0.1)).toFixed(2) + '.')
 } else if (formaPag === 2) {
    console.log('O preço a ser pago é : ' + (preco - (preco*0.15)).toFixed(2) + '.')
 } else if (formaPag === 3) {
    console.log('O preço a ser pago é : ' + preco.toFixed(2) + '.')
 } else {
    console.log('O preço a ser pago é : ' + (preco + (preco*0.1)).toFixed(2) + '.')
 }