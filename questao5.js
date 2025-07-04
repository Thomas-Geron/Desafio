let entrada = prompt("Digite um número inteiro:");
let numero = parseInt(entrada);

if (!isNaN(numero)) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        alert("fizzbuzz");
    } else if (numero % 3 === 0) {
        alert("fizz");
    } else if (numero % 5 === 0) {
        alert("buzz");
    } else {
    }
} else {
    alert("Entrada inválida. Por favor, digite um número inteiro.");
}