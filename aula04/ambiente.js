let valores = [5, 2, 8, 9, 15, 89, 23]
valores.sort()
console.log(valores.length)

/*
num.push(3) //push = cria um novo elemento, idependente do indice, e coloca na ultima posiçao.

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} recebe o valor ${num[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}



