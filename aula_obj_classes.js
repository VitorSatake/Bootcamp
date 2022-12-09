
// Objeto, grupo de dados (objeto literal), coleção dinâmica de chave:valor

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        //this // assume o nome do objeto
        console.log(`Meu nome é : ${this.nome} e minha idade é : ${this.idade}.`); // com crase invés de aspas
    }
};

pessoa.altura = 1.69; // incrementa o objeto com um novo dado

// delete vitor.nome; deleta a chave nome do objeto

//console.log(pessoa.nome); // imprime pelo valor nome
//console.log(pessoa.idade); // imprime pelo valor idade
//console.log(pessoa); // imprime todo o objeto

pessoa.descrever();

/* atribui outro valor a função dentro do objeto
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}
*/

pessoa['nome'] = 'teste'; // forma dinamica de acessar 
pessoa.nome = 'teste'; // forma direta

//pessoa.descrever();

// CLASSE

class Pessoa { // classe definição doque deveria ser (nesse caso uma pessoa)
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) { // constructor é oque acontece quando uma pessoa é estanciada
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é : ${this.nome} e minha idade é : ${this.idade} e eu nasci em ${this.anoNascimento}.`); // com crase invés de aspas 
    }
}

const vitor = new Pessoa('Vitor', 23); // instancia para a classe / passando parametro para o constructor
//vitor.nome = 'Vitor J Guerra';
//vitor.idade = 23;

const renan = new Pessoa('Renan', 30); // outra instancia para a classe / passando parametro para o constructor
//renan.nome = 'Renan J Paula';
//renan.idade = 30;

//const anoNscimento = new Pessoa(1991)

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();
//anoNscimento.descrever();

function compararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho(o) que ${pessoa2.nome} .`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velho(o) que ${pessoa1.nome} .`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`)
    }
}

const vitor2 = new Pessoa('Vitor', 23);
const renan2 = new Pessoa('Renan', 30);

compararPessoas(vitor2, renan2);