package edu.aluno.Metodos;

/*
 * Crie uma aplicação que resolva as seguintes situações:
 * 
 * Calcule as 4 operações basicas: soma, subtração, multiplicaçãoe divisão.Sempre 2 valores devem ser passados.
 * 
 * A partir da hora do dia, informe a mensagem adequada: Bom dia, Boa tarde, Boa noite.
 * 
 * Calcule o valor final de um imprestimo, a partir do valor solicitado.Taxas e parcelas influenciam.
 * Defina aebitrariamente as faixas que influenciam nos valores.
 * 
 * Observações:
 * 
 * Tente ao maximo criar metodos que trabalhem sozinhos ou em conjunto.
 * Pode chamar um metodo dentro do outro.
 * Pode passar como parametro, a chamada de outro metodo.
 */

public class Calculadora {

    public static void soma(double numero1, double numero2) {
        
        double resultado = numero1 + numero2;

        System.out.println("A soma de " + numero1 + "mais " + numero2 + "é : " + resultado);
    }

    public static void subtracao(double numero1, double numero2) {
        
        double resultado = numero1 - numero2;

        System.out.println("A subtração de " + numero1 + "menos " + numero2 + "é : " + resultado);
    }

    public static void multiplicacao(double numero1, double numero2) {
        
        double resultado = numero1 * numero2;

        System.out.println("A multiplicação de " + numero1 + "vezes " + numero2 + "é : " + resultado);
    }

    public static void divisao(double numero1, double numero2) {
        
        double resultado = numero1 / numero2;

        System.out.println("A divisão de " + numero1 + "dividido " + numero2 + "é : " + resultado);
    }
}
