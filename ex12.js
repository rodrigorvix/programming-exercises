function removerPropriedade (obj, propriedade) {
    const novoObj = Object.assign({}, obj)
    delete novoObj[propriedade]
    return console.log(novoObj)  
}

removerPropriedade({a: 1, b: 2}, "a")
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")

