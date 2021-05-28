function nomeDoMes (numeroMes) {
    const mes = {
        1:"janeiro",
        2:"fevereiro",
        3:"março",
        4:"abril",
        5:"maio",
        6:"junho",
        7:"julho",
        8:"agosto",
        9:"setembro",
        10:"outubro",
        11:"novembro",
        12:"dezembro"
    }

    return (numeroMes > 0 && numeroMes < 13) ? console.log(mes[numeroMes]) : console.log("Mês inválido!");
}

nomeDoMes(1)
nomeDoMes(4)
nomeDoMes(15)
