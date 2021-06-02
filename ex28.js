const filtrarPorQuantidadeDeDigitos = (array, numero) => {
  return console.log(array.filter(item => item.toString().length === numero))
}
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)



