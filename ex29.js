const segundoMaior = array => {
  const cloneArray = [...array]
  const maior = Math.max(...cloneArray)
  const posicaoMaior = cloneArray.indexOf(maior)
  cloneArray.splice(posicaoMaior,1)
  return console.log(Math.max(...cloneArray))
}
segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])
