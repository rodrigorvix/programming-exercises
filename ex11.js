function receberPrimeiroEultimoElemento (array) {
   const resultado = [array[0], array[array.length - 1]]
   return resultado
}

console.log(receberPrimeiroEultimoElemento([7,14,"olá"]))
console.log(receberPrimeiroEultimoElemento([-100,"aplicativo",16]))