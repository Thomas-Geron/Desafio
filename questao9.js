function authors() {
    const autoresUnicos = [];
    const autoresRegistrados = {};

    for (let i = 0; i < booksByCategory.length; i++) {
        const categoria = booksByCategory[i];

        for (let j = 0; j < categoria.books.length; j++) {
            const autor = categoria.books[j].author;

            if (!autoresRegistrados[autor]) {
                autoresUnicos.push(autor);
                autoresRegistrados[autor] = true;
            }
        }
    }

    return autoresUnicos;
}