let num = [9, 3, 4, 8, 5]
num.push(1) // vai acrescentar o valor um no final 
console.log(`O vetor tem ${num[4]} posições`)
console.log(`O primeiro valro é ${num[0]}`)
let pos = num.indexOf(9)
console.log(`O valor ${num[pos]} esta na podisição ${pos}`)


/* PARA ORGANIZAR O ARRY EM ORDEM CRESCENTE 

let num_auxiliar = NaN
for (let posi1 = 0; num.length > posi1; posi1++) {
    for (let posi2 = posi1 + 1; num.length > posi2; posi2++){
        if (num[posi1] > num[posi2]) {
            num_auxiliar = num[posi1]
            num[posi1] = num[posi2]
            num[posi2] = num_auxiliar 
        }
    }  
}
console.log(num)
*/ 

// FORMA SIMPLES DE ORDEM 

num.sort()
console.log(num)