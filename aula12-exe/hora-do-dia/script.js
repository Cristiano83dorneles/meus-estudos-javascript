function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora > 0 && hora < 12) {
        img.src = 'imagens/amanhecer.png'
        document.body.style.background = '#fff999'
    }
    else if (hora > 12 && hora < 18) {
        img.src = 'imagens/entardecer.png'
        document.body.style.background = '#996f03'
    }
    else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#04032d'
    }
}
