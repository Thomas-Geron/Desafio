let quantidade = parseInt(prompt("Quantos números você deseja inserir no vetor?"));

if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida. Digite um número inteiro positivo.");