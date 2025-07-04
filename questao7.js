let frase = prompt("Digite uma frase para verificar se é um palíndromo:");

let fraseFormatada = "";
for (let i = 0; i < frase.length; i++) {
    let caractere = frase[i].toLowerCase();
    if (caractere !== " ") {
        fraseFormatada += caractere;
    }
}