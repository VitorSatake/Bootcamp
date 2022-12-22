package edu.aluno.primeirasemana;

public class MinhaClasse { // corpo da classe


public static void main (String [] args) { // corpo do método
    String primeiroNome = "Pedro";
    String segundoNome = "Sampaio";

    String nomeCompleto = nomeCompleto(primeiroNome, segundoNome);
    System.out.println(nomeCompleto);

}

public static String nomeCompleto (String primeiroNome, String segundoNome) {// exemplo metodo
    return  "Resultado do metodo " + primeiroNome.concat(" ").concat(segundoNome);

}
}

    //System.out.println("Imprimindo teste.");

    //final String BR = "Brasil"; // final garatnet que o valor nçao pode ser alterado

/* Variaveis
    *Estrutura
       Tipo NomeBemDefinido = Atribuição (opcional em alguns casos)
       Exemplo:
         int idade = 23;
         double altura = 1.62;
         Dog spike; // observe que aqui a variavel spike nao tem valor

         boolean verdadeira;  pode ou nao ter valor atribuido ao tipo boolean
         boolean verdadeira = true;
 
 
    * Métodos 
        TipoRetorno NomeObjetivoNoInfinitivo Parametro(s)
        Exemplo:
          int somar (int numeroUm, int numero2)
          String formatarCep (long cep) // recebe um numero long(cep) e retorna uma String

 * 
 */
