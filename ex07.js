function estaEntre(numero,minimo,maximo,inclusivo=false) {
    
    if (minimo > maximo) {
        [maximo, minimo] = [minimo, maximo]
    }
    if (inclusivo) {
        return numero >= minimo && numero <= maximo
    }else {
        return numero > minimo && numero < maximo
    }
}

console.log(estaEntre(3,150,3))
console.log(estaEntre(3,150,3,true))
console.log(estaEntre(50,100,40))