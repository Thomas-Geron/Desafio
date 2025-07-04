function converterMoeda(valorReais) {
    const taxaEuro = 6.10;
    const taxaDolar = 5.70;

    const valorEmEuro = valorReais / taxaEuro;
    const valorEmDolar = valorReais / taxaDolar;

    alert(`Valor em reais: R$ ${valorReais.toFixed(2)}`);
    alert(`Valor em euro: € ${valorEmEuro.toFixed(2)}`);
    alert(`Valor em dólar: US$ ${valorEmDolar.toFixed(2)}`);
}

let entrada = prompt("Digite um valor em reais (R$):");
let valorReais = parseFloat(entrada);

if (!isNaN(valorReais) && valorReais >= 0) {
    converterMoeda(valorReais);
} else {
    alert("Valor inválido. Digite um número positivo.");
}