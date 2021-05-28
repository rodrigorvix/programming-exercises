function repetir(elemento, numeroRepeticao) {
    const resultado = []
    for (let i = 0; i < numeroRepeticao; i++) {
        resultado.push(elemento)
    }
    return console.log(resultado)
}

repetir("codigo", 2)
repetir(7,3)
repetir(123,5)

