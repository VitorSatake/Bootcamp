package edu.aluno.Metodos;

/*
 * Classe principal para executar os métodos
 */
public class Main {

    public static void main(String[] args) {
        
        //Calculadora
        System.out.println("\nExercicio Calculadora.\n");
        Calculadora.soma(3, 6);
        Calculadora.subtracao(9, 1.8);
        Calculadora.multiplicacao(7, 8);
        Calculadora.divisao(5, 2.5);

        //Mensagem
        System.out.println("\nExercicio Mensagem.\n");
        Mensagem.obterMensagem(9);
        Mensagem.obterMensagem(14);
        Mensagem.obterMensagem(1);

        //Emprestimo
        System.out.println("\nExercicio Emprestimo.\n");
        Emprestimo.calcular(1000, Emprestimo.getDuasParcelas());
        Emprestimo.calcular(1000, Emprestimo.getTresParcelas());
        Emprestimo.calcular(1000, 5);

        //Quadrilátero
        System.out.println("\nExercicio Quadrilátero.\n");
        Quadrilatero.area(3);
        Quadrilatero.area(5d, 5d);
        Quadrilatero.area(7, 8, 9);
        Quadrilatero.area(5f, 5f);//como é o memso formato do segundo, tem que especificar o valor com d e f por exemplo

        //Quadrilátero com retorno
        System.out.println("\nExercicio Quadrilátero com retorno.\n");

        double areaQuadrado = Quadrilatero_com_retorno.area(3);
        System.out.println("Área do quadrado : " + areaQuadrado);

        double areaRetangulo = Quadrilatero_com_retorno.area(5d, 5d);
        System.out.println("Área do retângulo : " + areaRetangulo);

        double areaTrapezio = Quadrilatero_com_retorno.area(7, 8, 9);
        System.out.println("Área do trapézio : " + areaTrapezio);

        double areaLosango = Quadrilatero_com_retorno.area(5f, 5f);
        System.out.println("Área do losango : " + areaLosango);

    }
}
