let num = document.getElementById('fnum') //buscar elementos
let tab = document.querySelector('select#flista') //buscar elementos
let res = document.querySelector('div#res') //buscar elementos
let valores = [] //criar array

function isNumero(n) { //validar se é digitado um valor entre 1 e 100
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //verifica se no array existe algum valor igual. Se existir retorna -1.
        return true
    } else {
        return false
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) { //se for num número e senão tiver na lista
        valores.push(Number(num.value))
        let item = document.createElement('option') //criar um elemento no select via JS
        item.text = `Valor ${num.value} adicionado.`
        flista.appendChild(item) //colocar o elemento no select via JS~
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //apagar os valores no campo de valores
    num.focus()  //colocar o ponteiro do rato no campo dos valores
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = Math.max.apply(Math, valores) //descobrir maior valor de um array
        let menor = Math.min.apply(Math, valores) //descobrir menor valor de um array
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
        }
        media = Math.round(soma / tot) //fazer media e arredondar

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
    }
}

function limpar() { //botão para limpar
    tab.innerHTML = ''
    res.innerHTML = ''
    valores = []
    num.value = ''
}
