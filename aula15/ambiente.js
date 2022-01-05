/*let num = [5,8,2,9,3] //criar array e preencher com alguns valores
num.push(1) //adiciona o valor 1 ao array na última posição
num.sort() //ordena os valores do array de forma crescente

console.log (num)
console.log(`O vetor tem ${num.length} posições.`) //diz o tamanho do array ou o nº de elementos
console.log (`O primeiro valor do vetor é ${num[0]}.`)

for (let pos = 0; pos < num.length; pos++){ //ciclo para percorrer o array e mostra-lo na consola
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
let num = [5,8,2,9,3] //criar array e preencher com alguns valores

for(let pos in num){ //outra forma de percorrer um array
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}