let amigo = {nome: 'josé', 
idade:'38', 
sexo:'M',
peso: 83.4,
engordar(p=0){
    this.peso += p
}}
console.log(amigo)
amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)