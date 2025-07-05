function encontrarElementoUnico(array) {
    let unico = 0;
    for (let i = 0; i < array.length; i++) {
        unico ^= array[i];
    }
    return unico;
}

let entrada = prompt("Digite os números inteiros separados por vírgula (ex: 1,2,3,2,1):");

let partes = entrada.split(',');
let numeros = [];

for (let i = 0; i < partes.length; i++) {
    numeros.push(parseInt(partes[i]));
}

let resultado = encontrarElementoUnico(numeros);
console.log("O número que aparece apenas uma vez é:", resultado);