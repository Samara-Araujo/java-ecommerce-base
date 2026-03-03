
    public class Main {
    public static void main(String[] args) {
        // Criando um produto (instanciando a classe)
        Produto meuProduto = new Produto();
        meuProduto.nome = "Teclado Mecânico";
        meuProduto.preco = 250.00;
        meuProduto.estoque = 10;

        System.out.println("--- Sistema de E-commerce ---");
        System.out.println("Produto: " + meuProduto.nome);
        System.out.println("Preço Original: R$ " + meuProduto.preco);

        // Chamando o método de desconto (igual as funções que você vê no JS)
        meuProduto.aplicarDesconto(10); // 10% de desconto
    }
}




