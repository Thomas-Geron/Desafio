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

function buscarPorPosicao() {
    let posicaoBusca = prompt("Digite a posição para buscar jogadores:");
    let encontrados = "";
    let achou = false;

    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao.toLowerCase() === posicaoBusca.toLowerCase()) {
            achou = true;
            encontrados += `- ${time[i].nome}, ${time[i].idade} anos, Pontuação: ${time[i].pontuacao}\n`;
        }
    }

    if (achou) {
        alert("Jogadores na posição " + posicaoBusca + ":\n" + encontrados);
    } else {
        alert("Nenhum jogador encontrado nessa posição.");
    }
}

function listarTime() {
    if (time.length === 0) {
        alert("Nenhum jogador cadastrado.");
        return;
    }

    let lista = "Jogadores cadastrados:\n";

    for (let i = 0; i < time.length; i++) {
        let j = time[i];
        lista += `- ${j.nome}, ${j.idade} anos, Posição: ${j.posicao}, Pontuação: ${j.pontuacao}\n`;
    }

    alert(lista);
}