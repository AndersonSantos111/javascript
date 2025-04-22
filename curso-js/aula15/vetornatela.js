let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/* CÓDIGO TRADICIONAL DO PERCURSO DE EXIBIÇÃO DO VETOR
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// ESSA É A VERSÃO MAIS SIMPLIFICADA DO PERCURSO  DE EXIBIÇÃO DO VETOR
for (let pos in valores) { // ESSE CÓDIGO SE LER: PARA CADA POSIÇÃO EM VALORES 
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
