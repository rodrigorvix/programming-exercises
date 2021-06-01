function somarNumeros (array) {
  return console.log(array.reduce(soma, 0))
}
function soma(acumulador,atual) {
  return acumulador + atual
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])