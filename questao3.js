function verificarIdades(anosNascimento, anoAtual) {
  const resultado = [];

  for (let i = 0; i < anosNascimento.length; i++) {
    const idade = anoAtual - anosNascimento[i];
    const status = idade >= 18 ? "maior" : "menor";
    resultado.push(status);
    alert(`Pessoa ${i + 1}: ${status === "maior" ? "Maior de idade" : "Menor de idade"}`);
  }

  return resultado;
}

const Atual = parseInt(prompt("Digite o ano atual:"));

const entrada = prompt("Digite os anos de nascimento separados por vírgula:");
const Nascimento = entrada.split(",").map(function(ano) {
    return parseInt(ano.trim());
});

verificarIdades(Nascimento, Atual);