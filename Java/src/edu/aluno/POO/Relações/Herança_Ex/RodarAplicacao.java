package edu.aluno.POO.Relações.Herança_Ex;

class RodarAplicacao {
    
    public static void main(String[] args) {
        
        Funcionario funcionario = new Funcionario();

        Funcionario gerente = new Gerente(); // Upcast
        Funcionario vendedor = new Vendedor(); // Upcast
        Funcionario faxineiro = new Faxineiro(); // Upcast

        // Gerente gerente_ = new Funcionario(); erro porque nao esta explicito
        //Vendedor vendedor_ = (Vendedor) new Funcionario(); // Downcast (Vendedor) explicito

        // Embora Downcast seja um conceito valido, deve ser evitado, ocorrem muitos erros
    }
}
