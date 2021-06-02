function Estudante(nome, notas){
  this.nome = nome
  const somaNotas = notas.reduce((acumulador, atual) => acumulador + atual)
  this.media = somaNotas / notas.length
}
function receberMelhorEstudante (estudantes){
  let arrayEstudantes = []
  
  for(let i in estudantes){
      arrayEstudantes.push(new Estudante(i, estudantes[i]))
  }
  const medias = arrayEstudantes.map(estudante => estudante.media)
  const melhorMedia = Math.max(...medias)

  return console.log(arrayEstudantes.filter(estudante => estudante.media === melhorMedia))
}
receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9] // média 7.75
  })