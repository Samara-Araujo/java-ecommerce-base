public class Produto {
    String nome;
    double preco;
    int estoque;

    // Método para calcular o novo preço
    public void aplicarDesconto(double porcentagem) {
        double valorDoDesconto = (this.preco * porcentagem) / 100;
        this.preco -= valorDoDesconto;
        System.out.println("Desconto aplicado! Novo preço: R$ " + this.preco);
    } {
    
}

}