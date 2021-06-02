 function inverter (obj){
   const arrayObj = Object.entries(obj)
   const arrayInvertido = arrayObj.map(([chave,valor]) => [valor,chave])
      return console.log(Object.fromEntries(arrayInvertido))
 }

 inverter({ a: 1, b: 2, c: 3})