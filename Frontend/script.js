function comprar(produto) {
    // 1. Identifica qual campo de cupom e qual preço usar com base no produto
    let idCupom = 'cupom-' + produto;
    let idPreco = 'preco-' + produto;

    const cupomDigitado = document.getElementById(idCupom).value.toUpperCase();
    const precoElemento = document.getElementById(idPreco);

    // 2. Lógica de desconto
    if (cupomDigitado === "SOFTWARE") {
        if (produto === 'teclado') {
            precoElemento.innerHTML = "R$ 225,00 <br><small style='color:green'>10% OFF!</small>";
        } else if (produto === 'mouse') {
            precoElemento.innerHTML = "R$ 135,00 <br><small style='color:green'>10% OFF!</small>";
        }
        alert("Cupom aplicado ao " + produto + "!");
    } else if (cupomDigitado === "") {
        alert("Por favor, digite o cupom 'SOFTWARE' para ganhar desconto no " + produto + ".");
    } else {
        alert("Cupom inválido para o " + produto + ".");
    }
}