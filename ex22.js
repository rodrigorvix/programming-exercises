const funcaoDaSorte = numero => console.log(numeroSorteado(numero))
const numeroSorteado = numero => {
  const numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1

  if(numeroAleatorio === numero) {
    return `Parabéns! O número sorteado foi ${numeroAleatorio}`
  }else {
    return `Que pena! O número sorteado foi ${numeroAleatorio}`
  }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)