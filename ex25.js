const buscarPalavrasSemelhantes = (palavra, array) => console.log(array.filter(item => item.includes(palavra)))

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])