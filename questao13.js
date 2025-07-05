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

function calcularPontuacaoMedia() {
    if (time.length === 0) {
        alert("Não há jogadores para calcular a média.");
        return;
    }

    let total = 0;

    for (let i = 0; i < time.length; i++) {
        total += time[i].pontuacao;
    }

    let media = total / time.length;
    alert("Pontuação média do time: " + media.toFixed(2));
}

function menu() {
    let opcao;
    do {
        opcao = prompt(
            "Menu:\n" +
            "1 - Adicionar jogador\n" +
            "2 - Buscar por posição\n" +
            "3 - Listar time\n" +
            "4 - Calcular pontuação média\n" +
            "5 - Sair\n" +
            "Escolha uma opção:"
        );

        switch (opcao) {
            case "1":
                adicionarJogador();
                break;
            case "2":
                buscarPorPosicao();
                break;
            case "3":
                listarTime();
                break;
            case "4":
                calcularPontuacaoMedia();
                break;
            case "5":
                alert("Encerrando o programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== "5");
}

menu();