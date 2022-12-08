

function escreverNome(nome) {
    return ('\nMeu nome é :' + nome); // função que retorna a frase
}

//escreverNome('Vitor.'); // passagem de parametro somente para a função escreverNome
//escreverNome('Lucas.');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escreverNome(' Gabriel.') + ' Sou maior de idade!\n'); // chamando a função escreverNome
    } else {
        console.log(escreverNome(' Gabriel.') + ' Sou menor de idade!\n');
    }
}

verificarIdade(17);

/* 

Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar
o calculo adequado.

Código Condição de Pagamento:
 - 1 À vista Débito, recebe 10% de desconto;
 - 2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
 - 3 Em duas vezes, preço normal de etiqueta sem juros;
 - 4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

 */

 function aplicarDesconto(preco, desconto) { // usei tambem para o juros, colocando como valor negativo na passagem de parametro
    return (preco - (preco * desconto / 100));
 }

 const preco = 100;

 const formaPag = 4;

 //const 1 = preco - (preco*0.1);
 //const 2 = preco - (preco*0.15);
 //const 3 = preco;
 //const 3 = preco + (preco*0.1);

 if (formaPag === 1) {
    console.log('O preço a ser pago é : ' + aplicarDesconto(preco, 10).toFixed(2) + '.');
 } else if (formaPag === 2) {
    console.log('O preço a ser pago é : ' + aplicarDesconto(preco, 15).toFixed(2) + '.');
 } else if (formaPag === 3) {
    console.log('O preço a ser pago é : ' + preco.toFixed(2) + '.');
 } else {
    console.log('O preço a ser pago é : ' + aplicarDesconto(preco, -10).toFixed(2) + '.');
 }

