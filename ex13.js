function apenasNumero(item) {
  return typeof(item) === 'number'
}
function filtrarNumeros(array) {
  return console.log(array.filter(apenasNumero))
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(["a", "c"])
