 function contar () {
    var txinicio = document.getElementById('txtinicio')
    var txfim = document.getElementById('txtfim')
   var txpasso = document.getElementById('txtpasso')
   var resultado = document.getElementById('res')
   var inicio = Number(txinicio.value)
   var fim = Number(txfim.value)
   var passo = Number(txpasso.value)

   if(txinicio.value.length == 0 || txfim.value.length == 0) {
     resultado.innerText = 'Impossível contar!'
     } else {
          if (txpasso.value.length == 0) {
               alert('Passo invalido considerando passo 1')
               passo = 1
          } 

          resultado.innerHTML = `Contando: <br>`

          if (inicio < fim) {
               // Contagem crescente
               for (var c = inicio; c <= fim; c += passo) {
                    resultado.innerHTML += ` ${c} \u{1F449}`
               }
          } else {
               // Contagem decrecente
               for (var c = inicio; c >= fim; c -= passo) {
                    resultado.innerHTML += ` ${c} \u{1F449}`
               }
          }
          
           resultado.innerHTML += `\u{1F3F3}`
     }
}