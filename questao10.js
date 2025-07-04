function exibirFila(fila) {
    if (fila.length === 0) {
        return "Fila vazia.\n";
    }
    
    let texto = "Fila de Espera:\n";
    for (let i = 0; i < fila.length; i++) {
        texto += `${i + 1}º ${fila[i]}\n`;
    }
    return texto;
}

function menu() {
    let fila = [];
    let opcao = "";

    do {
        let menuTexto = exibirFila(fila);
        menuTexto += "\nEscolha uma opção:\n";
        menuTexto += "1 - Novo Cliente\n";
        menuTexto += "2 - Atender Cliente\n";
        menuTexto += "3 - Sair";

        opcao = prompt(menuTexto);

        switch (opcao) {
            case "1":
                let nome = prompt("Digite o nome do novo cliente:");
                if (nome && nome.trim() !== "") {
                    fila.push(nome.trim());
                    alert(`${nome} foi adicionado à fila.`);
                } else {
                    alert("Nome inválido.");
                }
                break;

            case "2":
                if (fila.length > 0) {
                    let atendido = fila.shift();
                    alert(`Cliente atendido: ${atendido}`);
                } else {
                    alert("A fila está vazia. Ninguém para atender.");
                }
                break;

            case "3":
                alert("Encerrando o programa...");
                break;

            default:
                alert("Opção inválida. Escolha 1, 2 ou 3.");
        }
    } while (opcao !== "3");
}

menu();