let quantidade = parseInt(prompt("Quantos números você deseja inserir no vetor?"));

if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida. Digite um número inteiro positivo.");
} else {
    let vetor = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número:`));

        if (isNaN(numero)) {
            alert("Entrada inválida. Será considerado 0.");
            numero = 0;
        }

        vetor.push(numero);
    }

    let contadorCrescente = 0;
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[i - 1]) {
            contadorCrescente++;
        }
    }

    alert(`Você inseriu: [${vetor.join(", ")}]\nNúmeros em ordem crescente em relação ao anterior: ${contadorCrescente}`);
}