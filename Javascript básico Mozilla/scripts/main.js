let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/site123.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/weebly.png');
    }
}

document.querySelector('h1').onclick = function () {
    alert('Ai! Pare de me cutucar!')
}