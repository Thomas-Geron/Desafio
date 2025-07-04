let a = parseFloat(prompt("Digite o coeficiente a:"));
let b = parseFloat(prompt("Digite o coeficiente b:"));
let c = parseFloat(prompt("Digite o coeficiente c:"));

let delta = (b * b) - (4 * a * c);


if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
} else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(`x = ${x}`);
} else {
    console.log("A equação não possui raízes reais.");
}