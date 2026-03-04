
      function comprar() {
    // Pega o que foi digitado e coloca em maiúsculas
    const cupomDigitado = document.getElementById('cupom').value.toUpperCase();
    const precoTexto = document.querySelector('.card p');

    if (cupomDigitado === "SOFTWARE") {
        // Aplica o desconto de 10% (R$ 250 -> R$ 225)
        precoTexto.innerHTML = "R$ 225,00 <br><small style='color:green'>Cupom aplicado!</small>";
        alert("Sucesso! O desconto foi calculado pela lógica Java simulada.");
    } else if (cupomDigitado === "") {
        alert("Por favor, digite um cupom ou clique em comprar pelo preço normal.");
    } else {
        alert("Cupom inválido. Tente usar 'SOFTWARE'!");
    }
}