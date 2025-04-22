function carregar () {
    var mensagem = document.querySelector('#msg')
    var imagem = document.querySelector('#img')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    mensagem.innerHTML += `Agora são ${hora}:${minutos} horas.`

    if (hora >= 0 && hora < 12) {
        mensagem.innerHTML += ` Bom Dia`
        imagem.src = 'imagens/foto-manha.png'
        document.body.style.background = '#cfc2b2'
    } else if (hora <= 18) {
        mensagem.innerHTML += ` Boa Tarde`
        imagem.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#fdcea3'
    } else {
        mensagem.innerHTML += ` Boa Noite`
        imagem.src = 'imagens/foto-noite.png'
        document.body.style.background = '#02293c'
    }

    
}