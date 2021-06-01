const calcularMedia = array => console.log(array.reduce(somaNumeros) / array.length)
const somaNumeros = (acumulador, atual) => acumulador + atual

calcularMedia([0, 10])
calcularMedia([1, 2, 3, 4, 5])