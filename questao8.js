function countBooksInCategory(categorias) {
    const contagem = {};

    for (let categoria of categorias) {
        const nomeCategoria = categoria.category;
        const totalLivros = categoria.books.length;
        contagem[nomeCategoria] = totalLivros;
    }

    return contagem;
}