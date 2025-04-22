function fatorial (n) {
    let fatoria = n
    for (let f = n - 1; f > 1; f--) {
        fatoria *= f
    }
    return fatoria
}

console.log(fatorial(5))

// 5! = 4 x 3 x 2 x 1