package edu.aluno.exercicios_loops;

import java.util.Scanner;

/*
 * Faça um programa que peça uma nota, entre 0 e 10.
 * Mostre uma mensagem caso o valor seja inválido
 * e continue pedindo até que o usuário informe um valor válido.
 */
public class Ex_2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        float nota;

        System.out.println("Digite uma nota entre 0 e 10: ");
        nota = scan.nextFloat();


        while(nota < 0 || nota > 10) {
            System.out.println("Nota inválida ! Digite novamente: ");
            nota = scan.nextFloat();
        }
    }
}
