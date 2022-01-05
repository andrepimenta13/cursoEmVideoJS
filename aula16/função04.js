function fatorial (n) {
    let fat = 1
    for (let c = n; c >1; c--) {

        fat *= c // isto é igual a fat = fat * c
    }
    return fat
}

console.log (fatorial(5))

//calcular o factorial: 5! = 5 * 4 * 3 * 2 * 1 = 120
