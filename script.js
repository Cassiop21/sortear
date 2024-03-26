function gerarNumeroAleatorio() {
    // Obter os valores mínimos e máximos dos campos de texto
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    // Verificar se os valores inseridos são números válidos
    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Gerar número aleatório dentro do intervalo especificado
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    // Exibir o número aleatório gerado
    document.getElementById("numero").innerText = "Número aleatório: " + numeroAleatorio;
}