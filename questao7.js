let frase = prompt("Digite uma frase para verificar se é um palíndromo:");

let fraseFormatada = "";
for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i].toLowerCase();
    if (caractere !== " ") {
        fraseFormatada += caractere;
    }
}

let ehPalindromo = true;
for (let i = 0; i < fraseFormatada.length / 2; i++) {
    let j = fraseFormatada.length - 1 - i;
    if (fraseFormatada[i] !== fraseFormatada[j]) {
        ehPalindromo = false;
        break;
    }
}