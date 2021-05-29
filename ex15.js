function receberSomenteOsParesDeIndicesPares(array) {
  return console.log(array.filter(numerosEindicesPares))
}

function numerosEindicesPares (item, indice) {
  return (item % 2 === 0) && (indice % 2 === 0)
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) 
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])
