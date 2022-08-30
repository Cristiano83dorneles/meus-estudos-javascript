

function verificador() {
    var data = new Date()
    var idata = data.getFullYear()
    var ano = window.document.getElementById('iano')
    iano = Number(ano.value)
    var ver = window.document.getElementById('resp')
    var calc = idata - iano

    if (iano.length == 0 || iano < 1900 || iano >= idata) {
    ver.innerHTML = ` [ERRO] Corrija a data...${idata} `
}
else {
    var genero = window.document.getElementsByName('genero')
    var gene = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if (genero[0].checked) {
        gene = 'Homem'
        if (calc > 0 && calc < 12) {
            img.setAttribute('src' , 'imagens/menino.png')
        }
        else if ( calc >= 12 && calc < 18) {
            img.setAttribute( 'src' ,'imagens/hjovem.png')
        }
        else if (calc >= 18 && calc < 63) {
            img.setAttribute( 'src' ,'imagens/adulto.png')
        }
        else if (calc >= 63) {
            img.setAttribute( 'src' ,'imagens/idoso.png')
        }                    
        
    }
    else if (genero[1].checked) {
        gene = 'Mulher'
        if (calc > 0 && calc < 12) {
            img.setAttribute( 'src' ,'imagens/menina.png')
        }
        else if ( calc >= 12 && calc < 18) {
            img.setAttribute( 'src' ,'imagens/mjovem.png')
        }
        else if (calc >= 18 && calc < 63) {
            img.setAttribute( 'src' ,'imagens/adulta.png')
        }
        else if (calc >= 63) {
            img.setAttribute( 'src' ,'imagens/idosa.png')
        } 
    }
    ver.style.textAlign = 'center'
    ver.innerHTML = `Detectamos ${gene} com a idade de ${calc} anos. `
    ver.appendChild(img)
    
}

    
    
}
