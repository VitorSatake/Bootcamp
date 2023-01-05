package edu.aluno.exercicios_loops;

import java.util.Scanner;

/*
 * Faça um programa que calcule o fatorial de um numero inteiro fornecido pelo usuario.
 * Ex : 5!= 120 ( 5 x 4 x 3 x 2 x 1)
 */
public class Ex_6 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Fatorial: ");
        int fatorial = scan.nextInt();

        int mult = 1;

        System.out.print(fatorial + "! = ");
        for(int i = fatorial; i >= 1; i--) {
            mult = mult * i;
         
        }

        System.out.println(mult);

    }
}
