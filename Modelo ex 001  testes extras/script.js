function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manhã.png'
        document.body.style.background = '#6b9114'
        msg.innerHTML += '<p>Tenha um bom dia</p>'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#6693c4'
        msg.innerHTML += '<p>Tenha uma boa tarde</p>'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0e151d'
        msg.innerHTML += '<p>Tenha uma boa noite</p>'
    }
}
function marcar() {
    alert("Marcação realizada com sucesso!\nBom trabalho!");
}
function encerrar() {
    var fim;
    var r = confirm("Deseja encerrar o expediente?");
    if (r == true) {
        fim = "Expediente encerrado com sucesso!\nBom descanso!";
    }
    else {
        fim = "Ação cancelada com sucesso!";
    }
    document.getElementById("final").innerHTML = fim;
}
