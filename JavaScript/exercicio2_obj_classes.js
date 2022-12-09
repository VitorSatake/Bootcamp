/*

2 - Crie uma classe para representar pessoas.
Para cada pessoas teremosos atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = pese / (altura * altura)).
Instancie uma pessoa chamada José que tenha 70Kg de pese, 1,75 de altura e peça ao Jpsé para dizer 
o valor do seu IMC.

*/

class Pessoa {
    nome;
    peso;
    altura;
    //gastoReais;
    //precoCombus;

    constructor(nome, peso, altura) { 
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (peso / (altura * altura));
    }

    descreverIMC () {
        console.log(`\nMeu nome é : ${this.nome}, meu peso é : ${this.peso} Kg e minha altura é : ${this.altura} metros.`);
        console.log(`Meu IMC é :  ${this.imc.toFixed(2)}.\n`);
    }
}

const jose = new Pessoa('José', 75, 1.75);
//const carlos = new Pessoa('Carlos', 80, 1.60);

//console.log(uno);
//console.log(palio);

jose.descreverIMC();
//carlos.descreverIMC();