let num = [5,8,4]
num[3] = 6
num.push(9)
console.log(`Elementos da Variável composta: ${num}`)
console.log(`Quantidade de elementos: ${num.length}`)
console.log(`Primeiro elemento: ${num[0]}`)
console.log(`Elementos em ordem crescente: ${num.sort()}`)

let p = num.indexOf(5)
if (p == -1) {
    console.log('Este elemento não existe')
} else
console.log(`O elemento procurado é ${p}`)