/*

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Km rodado.
Crie um método que dado a quantidade de Km e o preço do combustivel nos dê o valor
gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioCombus;
    //gastoReais;
    //precoCombus;

    constructor(marca, cor, gastoMedioCombus, distancia, precoCombus) { 
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombus = gastoMedioCombus;
        this.gastoReais = distancia * precoCombus * gastoMedioCombus;
    }

    descreverGastoViagem () {
        console.log(`\nA marca do carro  é : ${this.marca}, sua cor é : ${this.cor} e seu gasto médio de combustivel é : ${this.gastoMedioCombus} litros por Km.`);
        console.log(`Seu gasto em reais é : R$ ${this.gastoReais.toFixed(2)}.\n`);
    }
}

const uno = new Carro('Fiat', 'azul', 1/10, 70, 5);
const corola = new Carro('Toyota', 'preto', 1/8, 70, 5);

//console.log(uno);
//console.log(palio);

uno.descreverGastoViagem();
corola.descreverGastoViagem();