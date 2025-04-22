function verificar () {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_usuario = document.getElementById('txtano').value
    var res = document.getElementById('res')
    if (ano_usuario.length <= 0 || ano_usuario > ano_atual) {
        alert('[ERRO]! Verifique se seu dados foram preenchido corretamente e tente novamente!')
    } else {
        var formulario_sexo = document.getElementsByName('txtsexo')
        var idade = ano_atual - Number(ano_usuario)
        var genero = ''   
        var img = document.createElement('img')
        
        
        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade <= 13) {
                // Criança
                genero = 'Menino'
                img.setAttribute('src', 'imagens/foto-crianca-homem.png')
            } else if (idade < 18) {
                // Adolecente
                img.setAttribute('src', 'imagens/foto-adolescente-homem.png')
            } else if (idade <= 38) {
                // Adulto de entre 20 e 30 anos
                img.setAttribute('src', 'imagens/foto-adulto.png')
            } else if (idade <= 60) {
                // Adulto entre 30 40 anso
                img.setAttribute('src', 'imagens/foto-adulto-40-anos.png')
            } else if (idade < 104) {
                // Idoso
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-idoso.png')
            } else {
                // Só pode estar morto kkkk
                genero = 'Idoso'
                img.setAttribute('src', 'imagens/foto-lapedi.png')
            }
        } else if (formulario_sexo[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade <= 13) {
                // Criança
                genero = 'Menina'
                img.setAttribute('src', 'imagens/foto-crianca-mulher.png')
            } else if (idade < 18) {
                // Adolecente
                img.setAttribute('src', 'imagens/foto-adolescente-mulher.png')
            } else if (idade <= 38) {
                // Adulto de entre 20 e 30 anos
                img.setAttribute('src', 'imagens/foto-adulta.png')
            } else if (idade <= 60) {
                // Adulto entre 30 40 anso
                img.setAttribute('src', 'imagens/foto-adulta-40-anos.png')
            } else if (idade < 104) {
                // Idoso
                genero = 'Idosa'
                img.setAttribute('src', 'imagens/foto-idosa.png')
            } else {
                // Só pode estar morto kkkk
                genero = 'Idosa'
                img.setAttribute('src', 'imagens/foto-lapedi.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos. <br>`
        res.appendChild(img)
    }
}