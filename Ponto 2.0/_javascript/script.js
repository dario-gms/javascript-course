function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong>.`
    if (hora >= 0 && hora < 12) {
        img.src = '_imagens/manhã.png'
        document.body.style.background = '#1fa64c'
        msg.innerHTML += '<p>Tenha um bom dia.</p>'
    } else if (hora >= 12 && hora < 18) {
        img.src = '_imagens/tarde.png'
        document.body.style.background = '#6693c4'
        msg.innerHTML += '<p>Tenha uma boa tarde</p>'
    } else {
        img.src = '_imagens/noite.png'
        document.body.style.background = '#0e151d'
        msg.innerHTML += '<p>Tenha uma boa noite</p>'
    }
}
function marcar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var ini;
    var s = confirm("Iniciar expediente?");
    if (s == true) {
        ini = `Expediente iniciado às ${hora}:${minuto}. \nBom Trabalho!`;
    }
    else {
        alert("Ação cancelada!")
        ini = "Expediente não iniciado";
    }
    document.getElementById("inicio").innerHTML = ini;
}

function encerrar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var fim;
    var r = confirm("Deseja encerrar o expediente?");
    if (r == true) {
        fim = `Expediente encerrado às ${hora}:${minuto}. \nBom descanso!`;
    }
    else {
        alert("Ação cancelada!")
        fim = "Tenha um bom trabalho.";
    }
    document.getElementById("final").innerHTML = fim;
}
