function gerar() {
    var inum = document.getElementById('inum')
    var itab = document.getElementById('itab')
    
    if (inum.value == 0) {
        window.alert('[ERRO] Digite um valor')
    }
    else {
        let i = Number(inum.value)
        let c = 1
        itab.innerHTML = '1'
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${i} x ${c} = ${i * c}`
            item.value = `tab${c}`
            itab.appendChild(item)
            c++
        }
    }
}
