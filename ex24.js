const contarCaractere = (letra, frase) => {
  const arrayFrase = frase.split('')
  let resultado = 0
  arrayFrase.forEach(elemento => {
    if (elemento === letra) {
      resultado++
    }
  })
  return console.log(resultado)
}

contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo") 