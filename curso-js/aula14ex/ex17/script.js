function Gerar_Tabuada () {
    var numero = document.querySelector('#txtnumber')
    var tabuada = document.querySelector('#tabuada')

    if (numero.value.length == 0) {
        alert('Número não inserido')
    } else {
        tabuada.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var multiplicacao = numero.valueAsNumber * c
            var item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${numero.value} x ${c} = ${multiplicacao}`
            tabuada.appendChild(item)
        }
    }

}