 function inverter (obj){
   const arrayObj = Object.entries(obj)
   console.log(arrayObj)
   const arrayInvertido = arrayObj.map(([chave,valor]) => [valor,chave])
    console.log(arrayInvertido)
      return console.log(Object.fromEntries(arrayInvertido))
 }

 inverter({ a: 1, b: 2, c: 3})