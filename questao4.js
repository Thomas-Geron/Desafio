function converterMoeda(valorReais) {
    const taxaEuro = 6.10;
    const taxaDolar = 5.70;

    const valorEmEuro = valorReais / taxaEuro;
    const valorEmDolar = valorReais / taxaDolar;

    alert(`Valor em reais: R$ ${valorReais.toFixed(2)}`);
    alert(`Valor em euro: € ${valorEmEuro.toFixed(2)}`);
    alert(`Valor em dólar: US$ ${valorEmDolar.toFixed(2)}`);
}
