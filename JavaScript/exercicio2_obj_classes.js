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
        console.log(`\nMeu nome é : ${this.nome}, meu peso é : ${this.peso} Kg e minha altura é : ${this.altura.toFixed(2)} metros.`);
        console.log(`Meu IMC é :  ${this.imc.toFixed(2)}.\n`);
        console.log(this.classificarIMC());
    }
    classificarIMC () {
        if (this.imc < 18.5) {
            return ('O IMC é : ' + this.imc.toFixed(2) + '. Ele está abaixo do peso!');
        } else if (this.imc >= 18.5 && this.imc < 25) {
            return ('O IMC é : ' + this.imc.toFixed(2) + '. Ele está com o peso normal!');
        } else if (this.imc >= 25 && this.imc < 30) {
            return ('O IMC é : ' + this.imc.toFixed(2) + '. Ele está acima do peso!');
        } else if (this.imc >= 30 && this.imc < 40) {
            return ('O IMC é : ' + this.imc.toFixed(2) + '. Ele está obeso!');
        } else {
            return ('O IMC é : ' + this.imc.toFixed(2) + '. Ele está com obesidade grave!');
        }
    }

}

const jose = new Pessoa('José', 50, 1.75);
const carlos = new Pessoa('Carlos', 50, 1.80);
const pedro = new Pessoa('Pedro', 90, 1.70);
const joao = new Pessoa('Joao', 73, 1.60);
const thiago = new Pessoa('Thiago', 85, 1.90);
const lucas = new Pessoa('Lucas', 120, 1.60);

//console.log(uno);
//console.log(palio);

jose.descreverIMC();
carlos.descreverIMC();
pedro.descreverIMC();
joao.descreverIMC();
thiago.descreverIMC();
lucas.descreverIMC();