package edu.aluno.exercicios_arrays;


/*
 * Crie um vetor de 6 numeros inteiros, e mostre-os na ordem inversa.
 */
public class Ex_1 {
    public static void main(String[] args) {
        
        int[] vetor = {0, -5, 15, 50, 8, 4};
        
        int count = 0;
        while(count < (vetor.length)) {
            System.out.println(vetor[count]);
            count++;
        }

        System.out.println("Divisao das formas de imprimir: ");

        for(int i = (vetor.length -1); i >= 0; i--) {
            System.out.println(vetor[i]);
        }

    }
}
