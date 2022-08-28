var idade = 16
console.log(`Sua idade é de ${idade}` )
if (idade < 16) {
    console.log(`Você não pode votar ainda`)
}
else if (idade == 16 || idade < 18) {
    console.log(`Seu voto é Opcional`)
}
else if (idade < 62 || idade == 62) {
    console.log(`Seu voto é obrigatório`) 
}
else if (idade > 62) {
    console.log(`Seu voto é opcional !`)
}