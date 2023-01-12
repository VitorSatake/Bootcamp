package edu.aluno.POO;

/*
 * Classe para rodar a aplicação da classe Carro
 */
class RodarAppCarro {
    public static void main(String[] args) {
        
        Carro carro1 = new Carro(); // criação do objeto carro1, forma 1 sem parametros da classe Carro

        carro1.setCor("Azul");
        carro1.setModelo("BMW Serie 3");
        carro1.setCapacidadeTanque(59);

        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println(carro1.totalValorTanque(6.39));

        Carro carro2 = new Carro("Cinza", "Mercedes-Bens Classe C", 66); // criação do objeto carro2, forma 2 com parametros (sobrecarga) da classe Carro

        System.out.println(carro2.getModelo());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println(carro2.totalValorTanque(6.46));

    }
}
