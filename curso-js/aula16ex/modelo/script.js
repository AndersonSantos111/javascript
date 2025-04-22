let valores = []

function E_Numero(n) {
    if (n <= 0 || n > 100) {
        return true
    } else {
        return false
    }
}


function Analizador () {
    let num = document.querySelector('#txtnum')
    let box = document.querySelector('#box-num')
    
    
    if (E_Numero(Number(num.value)) || valores.indexOf(Number(num.value)) != -1) {
        alert('Valor invalido ou já adicionado na lista')
    } else {
        document.querySelector('#res').innerHTML = ''
        let item = document.createElement('option')
        valores.push(Number(num.value)) 
        item.text = `Valor ${num.value} adicionado.`
        box.appendChild(item)

    }
}

function Maior () {
    let M = 0
    for (let posi in valores) {
        if (valores[posi] > M) {
            M = valores[posi]
        }
    }
    return M
}

function Menor () {
    let M = valores[0]
    for (posi in valores) {
        if (valores[posi] < M) {
            M = valores[posi]
        }
    }
    return M
}

function Soma () {
    let S = 0
    for (posi in valores) {
        S += valores[posi]
    }
    return S
}

function Finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let resultado = document.querySelector('#res')
        resultado.innerHTML = ''
        resultado.innerHTML += `<p> Ao todo, temos ${valores.length} números cadastrados </p>
        <p> O maior valor informado foi ${Maior()} </p>
        <p> O menor valor informad foi ${Menor()} </p>
        <p> A soma de todos os números é ${Soma()} </p>
        <p> A media dos valores digitados é ${Soma() / valores.length} </p>`
    }
    
}
