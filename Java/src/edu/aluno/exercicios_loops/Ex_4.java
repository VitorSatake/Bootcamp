package edu.aluno.exercicios_loops;

import java.util.Scanner;

/*
 * Faça um programa que peça N numeros inteiros, calcule e mostre a quantidade de numeros pares
 * e a quantidade de numeros impares.
 */
public class Ex_4 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int quantNumeros;
        int numero;
        int quantPar = 0 , quantImpar = 0;

        System.out.println("Quantidade de números: ");
        quantNumeros = scan.nextInt();

        int count =  0;
        do {
            System.out.println("Numero: ");
            numero = scan.nextInt();

            if (numero % 2 == 0) quantPar++;
            else quantImpar++;

            count++;

        } while(count < quantNumeros);

        System.out.println("Pares: ." + quantPar);
        System.out.println("Impares: ." + quantImpar);
    }
}
