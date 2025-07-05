let time = [];

function adicionarJogador() {
    let nome = prompt("Digite o nome do jogador:");
    let idade = parseInt(prompt("Digite a idade do jogador:"));
    let posicao = prompt("Digite a posição do jogador:");
    let pontuacao = parseFloat(prompt("Digite a pontuação do jogador:"));

    let jogador = {
        nome: nome,
        idade: idade,
        posicao: posicao,
        pontuacao: pontuacao
    };

    time.push(jogador);
    alert("Jogador adicionado com sucesso!");
}