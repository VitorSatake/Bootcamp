package edu.aluno.exercicios_arrays;

import java.util.Random;

/*
 * Faça um programa que leia 20 numeros inteiros aleatorios(entre 0 e 100) armazene=os num vetor.
 * Ao final mostre os numeros e seus sucessores.
 */
public class Ex_3 {
    public static void main(String[] args) {
        Random randon = new Random();

        int[] numerosAleatorios = new int[20];

        for (int i = 0; i < numerosAleatorios.length; i++) {
            int numero = randon.nextInt(100);
            numerosAleatorios[i] = numero;
        }

        System.out.println("Numeros Aleatorios: ");

        for (int numero : numerosAleatorios) {
            System.out.print(numero + " ");
        }

        System.out.println("\nSucessores dos Numeros Aleatorios: ");

        for (int numero : numerosAleatorios) {
            System.out.print((numero + 1) + " ");
        }

        System.out.println("\nAntecessores dos Numeros Aleatorios: ");

        for (int numero : numerosAleatorios) {
            System.out.print((numero - 1) + " ");
        }
    }
}
