function Estudante (nome, notas) {
  this.nome = nome
  const soma = notas.reduce((acumulador,atual) => acumulador + atual)
  this.media = soma / notas.length
}

function receberMelhorEstudante (obj) {
  const arrayEstudantes = []

  for(let i in obj) {
    arrayEstudantes.push(new Estudante(i, obj[i]))
  }
  const medias = arrayEstudantes.map(estudante => estudante.media)
  const maiorMedia = Math.max(...medias)
  return console.log(arrayEstudantes.filter(estudante => estudante.media === maiorMedia))
}

receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], 
  Mariana: [9, 6.6, 7.9, 8], 
  Carla: [7, 7, 8, 9] 
  })