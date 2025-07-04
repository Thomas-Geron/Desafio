let continuar;

do {
    let numeroValido = false;
    let numero;

    while (!numeroValido) {
        let entrada = prompt("Digite um número inteiro positivo:");

        numero = parseInt(entrada);

        if (!isNaN(numero) && numero >= 0) {
            numeroValido = true;
        } else {
            alert("Entrada inválida. Por favor, digite um número inteiro positivo.");
        }
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    alert(`O fatorial de ${numero} é: ${fatorial}`);

    continuar = prompt("Deseja calcular outro fatorial? (S/N)").trim().toLowerCase();

} while (continuar === "s");