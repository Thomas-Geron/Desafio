function encontrarElementoUnico(array) {
    let unico = 0;
    for (let i = 0; i < array.length; i++) {
        unico ^= array[i];
    }
    return unico;
}