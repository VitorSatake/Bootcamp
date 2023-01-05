package edu.aluno.exercicios_loops;

import java.util.Scanner;

/*
 * Faça um programa que leia 5 números e informe o maior número e a média desses números.
 */
public class Ex_3 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int numero;

        int maior = 0;
        int soma = 0;
        

        int count = 0;
        do {
            System.out.println("Número: ");
            numero = scan.nextInt();

            soma = soma + numero;
            

            if (numero > maior) maior = numero; // atribui o maior valor de numero a variavel maior

            count++;
        } while(count < 5);

        System.out.println("Maior: " + maior);
        System.out.println("Média: " + soma/count);
    }
}
