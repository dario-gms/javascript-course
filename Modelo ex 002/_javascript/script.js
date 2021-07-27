function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '_imagens/homem-bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_imagens/homem-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_imagens/homem-adulto.png')
            } else {
                img.setAttribute('src', '_imagens/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', '_imagens/mulher-bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', '_imagens/mulher-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', '_imagens/mulher-adulta.png')
            } else {
                img.setAttribute('src', '_imagens/mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
        res.appendChild(img)
    }
}