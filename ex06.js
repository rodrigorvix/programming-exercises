function inverso (valor) {
    const tipo = typeof(valor)
    
    if(tipo === "boolean") {
        return console.log(!valor)
    } else if (tipo === "number") {
        return console.log(-valor)
    }else {
        return console.log(`Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}.`)
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")