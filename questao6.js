function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let entrada = prompt("Digite a quantidade de termos da sequência de Fibonacci:");
let n = parseInt(entrada);