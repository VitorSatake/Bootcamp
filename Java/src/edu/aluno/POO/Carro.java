package edu.aluno.POO;

/*
 * Classe de exemplo para exercicio, classe Carro
 * 
 * Boas praticas: o construtor sempre abaixo dos atributos, seguidos pelos sets e gets e por ultimo
 * metodos de execução de operações
 */
class Carro {
    // criaçao dos atributos
    String cor;
    String modelo;
    int capacidadeTanque;

    // objeto vazio
    Carro() {

    }

    // objeto com parametros, valores iniciais (com sobrecarga)
    Carro(String cor, String modelo, int capacidadeTanque) {
        this.cor = cor;
        this.modelo = modelo;
        this.capacidadeTanque = capacidadeTanque;
    }

    // Construtor aqui

    void setCor(String cor) {
        this.cor = cor;
    }

    String getCor() {
        return cor;
    }

    void setModelo(String modelo) {
        this.modelo = modelo;
    }

    String getModelo() {
        return modelo;
    }

    void setCapacidadeTanque(int capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }

    int getCapacidadeTanque() {
        return capacidadeTanque;
    }

    // metodo do total para encher o tanque

    double totalValorTanque(double valorCombustivel) {
        return capacidadeTanque*valorCombustivel;
    }
}
