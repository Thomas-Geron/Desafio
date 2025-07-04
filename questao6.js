function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let entrada = prompt("Digite a quantidade de termos da sequência de Fibonacci:");
let n = parseInt(entrada);

if (!isNaN(n) && n > 0) {
    let sequencia = "";

    for (let i = 0; i < n; i++) {
        sequencia += fibonacci(i) + (i < n - 1 ? ", " : "");
    }

    alert(`Os ${n} primeiros termos da sequência de Fibonacci são:\n${sequencia}`);
} else {
    alert("Entrada inválida. Digite um número inteiro positivo.");
}