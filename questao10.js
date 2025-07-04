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